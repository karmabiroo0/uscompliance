module.exports = function(migrate) {
  migrate((db) => {
    // Empty migration - email functionality is handled by PocketBase hooks
    // See: apps/pocketbase/pb_hooks/contact-form-admin-notification.pb.js
  }, (db) => {
    // Empty rollback
  });
};