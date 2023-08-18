import moment from "moment";
const BucketDate = ({ resetBucket }) => {
  return (
    <>
      <input type="text" placeholder={moment().format("YYYY[-]MM[-]DD")} />
      <input type="text" placeholder={moment().format("HH[-]mm[-]ss")} />
      <button type="button" onClick={resetBucket}>
        새로작성
      </button>
    </>
  );
};
export default BucketDate;
