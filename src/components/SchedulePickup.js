import Header from "../utils/Header";
import { useHistory } from "react-router-dom";

const checkString = (obj, str) =>
  obj.hasOwnProperty(str) && obj[str] && obj[str].trim().length;

const checkNumber = (obj, num) =>
  obj.hasOwnProperty(num) && obj[num] && !isNaN(obj[num]);

const SchedulePickup = (props) => {
  const { enablePickup, gridApi, setGridApi } = props;
  const history = useHistory();

  const schedulePickupHandler = () => {
    //do validations
    let rowData = [];
    let invalidRows = [];
    gridApi.forEachNode((node) => rowData.push(node.data));
    for (let i = 0; i < rowData.length; i++) {
      let node = rowData[i];
      if (
        !(
          checkString(node, "country") &&
          checkNumber(node, "handlingUnits") &&
          checkString(node, "packageType") &&
          checkNumber(node, "postalCode") &&
          checkString(node, "serviceType") &&
          checkNumber(node, "weight")
        )
      ) {
        invalidRows.push(i + 1);
      }
    }
    if (invalidRows.length === 0) {
      alert("Pickup is scheduled successfully !");
      history.push("/home");
    } else alert(`Below rows are invalid \n ${invalidRows.join(",")}`);
  };

  return (
    <div
      style={{
        border: "2px solid #b83efa",
        backgroundColor: "#efefef",
        height: 60,
      }}>
      <Header headerTitle={" "} />
      <div
        style={{
          fontSize: 14,
          borderTop: "3px solid #b83efa",
          margin: 0,
          position: "relative",
        }}>
        <button
          type="button"
          onClick={schedulePickupHandler}
          disabled={!enablePickup}
          style={{
            backgroundColor: `${!enablePickup ? "#ffffff" : "#b13af1"}`,
            color: `${!enablePickup ? "#3a3a3a" : "#ffffff"}`,
            border: 0,
            padding: 5,
            position: "absolute",
            right: 15,
            bottom: 5,
            top: 5,
            height: 35,
          }}>
          Schedule Pickup
        </button>
      </div>
    </div>
  );
};

export default SchedulePickup;
