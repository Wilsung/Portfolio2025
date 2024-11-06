export default function Input({ label, id, error, isTextArea, ...props }) {
  return (
    <div className="control">
      <div className="control no-margin">
        <label htmlFor={id}>{label}</label>
        {isTextArea ? (
          <textarea id={id} {...props} />
        ) : (
          <input id={id} {...props} />
        )}
      </div>
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
