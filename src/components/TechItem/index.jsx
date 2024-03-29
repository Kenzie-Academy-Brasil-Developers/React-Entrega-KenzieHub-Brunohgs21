import { ItemTech } from "../DashboardHeader";

const TechItem = ({ id, status, title, setOpenModalEdit }) => {
  function edit() {
    localStorage.setItem("TechId", id);
    localStorage.setItem("TechName", title);
    setOpenModalEdit(true);
  }
  return (
    <ItemTech onClick={edit}>
      <p>{title}</p>
      <p>{status}</p>
    </ItemTech>
  );
};

export default TechItem;
