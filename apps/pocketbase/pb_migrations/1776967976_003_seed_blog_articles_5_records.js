/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("blog_articles");

  const record0 = new Record(collection);
    record0.set("title", "OSHA Compliance Best Practices");
    record0.set("excerpt", "Learn the essential OSHA compliance strategies that every safety manager should know to protect their workforce and maintain regulatory standards.");
    record0.set("content", "OSHA compliance is critical for any organization that wants to maintain a safe workplace and avoid costly penalties. This comprehensive guide covers the key requirements and best practices for OSHA compliance.\n\nKey Areas of Focus:\n\n1. Hazard Assessment and Control\nRegularly identify workplace hazards and implement appropriate controls. This includes conducting risk assessments, documenting findings, and implementing corrective measures.\n\n2. Employee Training and Education\nEnsure all employees receive proper training on workplace hazards, safety procedures, and emergency protocols. Documentation of training is essential for compliance.\n\n3. Incident Reporting and Investigation\nEstablish a system for reporting workplace incidents and near-misses. Investigate all incidents thoroughly to identify root causes and prevent recurrence.\n\n4. Personal Protective Equipment (PPE)\nProvide appropriate PPE for all hazardous tasks and ensure employees are trained in proper use, maintenance, and disposal.\n\n5. Record Keeping\nMaintain accurate records of all safety-related activities, incidents, and training. These records must be kept for the required retention periods.\n\nImplementing these best practices will help your organization maintain OSHA compliance and create a safer workplace for all employees.");
    record0.set("author", "Safety Team");
    record0.set("category", "OSHA");
    record0.set("published_date", "2026-04-15");
    record0.set("slug", "osha-compliance-best-practices");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("title", "Environmental Regulations Update 2026");
    record1.set("excerpt", "Stay informed about the latest environmental regulations and compliance requirements for 2026. This update covers new EPA standards and industry-specific guidelines.");
    record1.set("content", "Environmental regulations continue to evolve, and staying current is essential for business compliance. This article provides an overview of the major environmental regulation updates for 2026.\n\nMajor Updates:\n\n1. EPA Air Quality Standards\nNew stricter air quality standards have been implemented for industrial facilities. Organizations must conduct emissions audits and implement control measures to meet these standards.\n\n2. Water Pollution Prevention\nUpdated water discharge regulations require enhanced monitoring and reporting. Facilities must implement best management practices to prevent water contamination.\n\n3. Waste Management Requirements\nNew hazardous waste classification guidelines have been issued. Review your waste streams and update disposal procedures accordingly.\n\n4. Greenhouse Gas Reporting\nExpanded greenhouse gas reporting requirements now apply to more facilities. Establish baseline measurements and implement reduction strategies.\n\n5. Compliance Documentation\nMaintain comprehensive documentation of all environmental compliance activities. Regular audits and third-party certifications are recommended.\n\nOrganizations should conduct a thorough review of their environmental practices and update policies to ensure full compliance with 2026 regulations.");
    record1.set("author", "Compliance Team");
    record1.set("category", "Environmental");
    record1.set("published_date", "2026-04-10");
    record1.set("slug", "environmental-regulations-update-2026");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("title", "DOT Safety Requirements Guide");
    record2.set("excerpt", "A comprehensive guide to Department of Transportation safety requirements for commercial vehicles and transportation operations.");
    record2.set("content", "The Department of Transportation (DOT) establishes critical safety standards for all commercial transportation operations. This guide outlines the key requirements every transportation company must follow.\n\nCore DOT Requirements:\n\n1. Vehicle Maintenance and Inspection\nAll commercial vehicles must undergo regular inspections and maintenance. Keep detailed records of all maintenance activities and repairs.\n\n2. Driver Qualifications and Training\nEnsure all drivers meet DOT qualification standards and maintain current certifications. Implement ongoing training programs for safety and compliance.\n\n3. Hours of Service Regulations\nComply with hours of service rules to prevent driver fatigue. Maintain accurate logbooks and electronic logging device (ELD) records.\n\n4. Vehicle Equipment Standards\nAll vehicles must be equipped with required safety equipment including lights, reflectors, brakes, and emergency equipment.\n\n5. Hazardous Materials Compliance\nIf transporting hazardous materials, ensure proper classification, packaging, labeling, and documentation. Train employees on hazmat procedures.\n\n6. Safety Management Program\nDevelop and implement a comprehensive safety management program that includes driver training, vehicle maintenance, and incident investigation.\n\nRegular audits and compliance checks will help ensure your transportation operations meet all DOT requirements.");
    record2.set("author", "Transportation Team");
    record2.set("category", "DOT");
    record2.set("published_date", "2026-04-05");
    record2.set("slug", "dot-safety-requirements-guide");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("title", "Industrial Hygiene Standards");
    record3.set("excerpt", "Understanding industrial hygiene standards and implementing effective workplace health and safety measures to protect employee wellbeing.");
    record3.set("content", "Industrial hygiene is the science of anticipating, recognizing, evaluating, and controlling workplace factors that may cause illness or injury. This article covers essential industrial hygiene standards.\n\nKey Industrial Hygiene Principles:\n\n1. Hazard Recognition\nIdentify all potential chemical, biological, physical, and ergonomic hazards in the workplace. Conduct thorough workplace assessments regularly.\n\n2. Exposure Assessment\nMeasure and evaluate employee exposure to identified hazards. Compare results against established exposure limits and standards.\n\n3. Hazard Control Hierarchy\nImplement controls in order of effectiveness: elimination, substitution, engineering controls, administrative controls, and personal protective equipment.\n\n4. Ventilation Systems\nEnsure proper ventilation systems are installed and maintained. Regular testing and maintenance of HVAC systems is critical.\n\n5. Monitoring and Surveillance\nImplement health monitoring programs for employees exposed to hazards. Maintain medical records and conduct periodic health assessments.\n\n6. Employee Education\nProvide comprehensive training on workplace hazards, safe work practices, and proper use of protective equipment.\n\n7. Documentation and Records\nMaintain detailed records of all industrial hygiene activities, assessments, and employee health monitoring.\n\nProactive industrial hygiene management creates a healthier, safer workplace and reduces occupational illness and injury.");
    record3.set("author", "Health Team");
    record3.set("category", "Industrial Hygiene");
    record3.set("published_date", "2026-03-28");
    record3.set("slug", "industrial-hygiene-standards");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("title", "MC Registration Process Simplified");
    record4.set("excerpt", "A step-by-step guide to the Motor Carrier registration process. Learn how to obtain your MC number and maintain compliance with FMCSA requirements.");
    record4.set("content", "Motor Carrier (MC) registration is a fundamental requirement for commercial transportation operations. This guide simplifies the MC registration process and explains what you need to know.\n\nMC Registration Overview:\n\n1. Determine Your Need for MC Registration\nIf you operate commercial vehicles for hire, you likely need an MC number. Review FMCSA guidelines to determine if your operation requires registration.\n\n2. Prepare Required Documentation\nGather necessary documents including proof of insurance, vehicle information, driver qualifications, and safety management plans.\n\n3. Complete the Application\nFile Form OP-1 (Application for Motor Carrier or Broker Authority) with the FMCSA. You can apply online through the FMCSA website.\n\n4. Insurance Requirements\nObtain appropriate liability insurance coverage. Minimum coverage amounts vary based on cargo type and vehicle classification.\n\n5. Safety Management Program\nDevelop a comprehensive safety management program addressing driver qualifications, vehicle maintenance, and incident investigation.\n\n6. Application Review and Approval\nThe FMCSA will review your application. Be prepared to respond to any requests for additional information.\n\n7. Maintain Compliance\nOnce registered, maintain your MC number by complying with all FMCSA regulations and filing required reports.\n\nThe MC registration process is essential for operating legally as a motor carrier. Ensure all requirements are met and maintained throughout your operation.");
    record4.set("author", "Admin Team");
    record4.set("category", "MC Registration");
    record4.set("published_date", "2026-03-20");
    record4.set("slug", "mc-registration-process-simplified");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})