
const NoteHead = ({index, content}) => {
  return (
    <>
        <div className="flex flex-row gap-2">
            <h5>{index}:-</h5>
            <p>{content}...</p>
        </div>

    </>
  );
};

export default NoteHead;