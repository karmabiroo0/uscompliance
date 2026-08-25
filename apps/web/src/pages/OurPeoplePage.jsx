import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Linkedin, Loader2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useIntegratedAi } from '@/hooks/use-integrated-ai.jsx';
import { Skeleton } from '@/components/ui/skeleton';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Ryan Foster',
    title: 'CEO',
    bio: 'Leads company strategy, nationwide operations, and client success initiatives with over 12 years of experience in compliance and transportation services.',
    prompt: 'Professional American male executive, age 32-38, blonde hair, clean hairstyle, light skin tone, wearing navy blue business suit, white shirt, professional confident pose, grey office studio background, premium corporate headshot, realistic lighting, modern business portrait.'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    title: 'Director of DOT Compliance',
    bio: 'Specializes in DOT inspections, safety audits, FMCSA filings, and fleet compliance solutions.',
    prompt: 'Professional African American male, age 34-40, short neat haircut, dark navy professional suit, white shirt, standing office portrait, confident business executive look, grey studio background, realistic corporate photography.'
  },
  {
    id: 3,
    name: 'Olivia Bennett',
    title: 'Director of MC & FMCSA Registrations',
    bio: 'Expert in MC authority setup, DOT number registration, BOC-3 filings, and trucking authority compliance.',
    prompt: 'Professional American woman, age 30-36, light brown hair, business formal navy blazer, white shirt, confident office pose, realistic corporate portrait, clean grey background, executive style.'
  },
  {
    id: 4,
    name: 'Daniel Carter',
    title: 'Head of Safety & Fleet Operations',
    bio: 'Leads safety systems, vehicle inspection compliance, CSA score improvement, and fleet monitoring.',
    prompt: 'Professional American male, age 35-42, dark hair, business suit, professional standing pose, grey studio office background, realistic executive portrait.'
  },
  {
    id: 5,
    name: 'Sophia Williams',
    title: 'Compliance Strategy Manager',
    bio: 'Oversees monthly compliance subscriptions, OSHA support, and client regulatory planning.',
    prompt: 'Professional business woman, age 29-35, blonde hair, navy blazer, professional office portrait, realistic corporate image, clean grey background.'
  },
  {
    id: 6,
    name: 'James Walker',
    title: 'Operations Lead',
    bio: 'Manages daily processing workflows, registration timelines, and customer support systems.',
    prompt: 'Professional American male, age 31-38, business formal suit, clean office headshot, realistic executive lighting, studio portrait.'
  }
];

export default function OurPeoplePage() {
  const { messages, sendMessage, isStreaming, isLoadingHistory } = useIntegratedAi();
  const hasRequested = useRef(false);

  // Extract all generated images from the AI chat history
  const generatedImages = messages.flatMap(msg => msg.images || []);

  useEffect(() => {
    if (!isLoadingHistory && !hasRequested.current) {
      // If we don't have enough images in history, request them
      if (generatedImages.length < TEAM_MEMBERS.length && !isStreaming) {
        hasRequested.current = true;
        
        const fullPrompt = `Please use the generate_image tool to create 6 corporate headshots for our leadership team. Generate them one by one using these exact descriptions:
        1. ${TEAM_MEMBERS[0].prompt}
        2. ${TEAM_MEMBERS[1].prompt}
        3. ${TEAM_MEMBERS[2].prompt}
        4. ${TEAM_MEMBERS[3].prompt}
        5. ${TEAM_MEMBERS[4].prompt}
        6. ${TEAM_MEMBERS[5].prompt}`;

        sendMessage(fullPrompt);
      }
    }
  }, [isLoadingHistory, generatedImages.length, isStreaming, sendMessage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <Helmet>
        <title>Our People - USA Compliance</title>
        <meta name="description" content="Meet the leadership team behind USA Compliance." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Meet Our <span className="text-secondary">Leadership Team</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground"
              >
                The industry experts dedicated to keeping your business compliant, safe, and moving forward.
              </motion.p>
            </div>

            {isStreaming && generatedImages.length < TEAM_MEMBERS.length && (
              <div className="flex items-center justify-center gap-3 mb-12 text-secondary font-medium">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>AI is generating team portraits... ({generatedImages.length}/{TEAM_MEMBERS.length})</span>
              </div>
            )}

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {TEAM_MEMBERS.map((member, index) => {
                const imageUrl = generatedImages[index];

                return (
                  <motion.div 
                    key={member.id}
                    variants={cardVariants}
                    className="team-card group flex flex-col h-full"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      {imageUrl ? (
                        <img 
                          src={imageUrl} 
                          alt={`${member.name} - ${member.title}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Skeleton className="w-full h-full" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                          <p className="text-sm font-medium text-secondary mt-1">{member.title}</p>
                        </div>
                        <a 
                          href="#" 
                          aria-label={`${member.name}'s LinkedIn`}
                          className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:-translate-y-1 transform"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}