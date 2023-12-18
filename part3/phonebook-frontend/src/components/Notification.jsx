const Notification = ({
  notification
}) => {
  return notification === null ? null : (
    <div className='notification' style={{ color: notification.error ? "red" : "green" }}>
      {notification.message}
    </div>
  );
};

export default Notification;
