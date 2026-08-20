function Toast({
  message,
  visible
}) {
  if (!visible) {
    return null;
  }

  return (
    <div className="toast">
      {message}
    </div>
  );
}

export default Toast;