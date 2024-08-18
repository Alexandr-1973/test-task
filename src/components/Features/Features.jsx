import { renderElemArray } from "../../utils/utils";
import css from "./Features.module.css";
import { tableValues } from "../../utils/utils";
import sprite from "../../images/sprite.svg"
import { setIcon } from "../../utils/setIcon";

const Features = ({ camperValue }) => {
  const elem = [
    "adults",
    "automatic",
    "AC",
    "petrol",
    "kitchen",
    "beds",
    "conditioner",
    "CD",
    "radio",
    "hob",
  ];

  const elemTable = [
    "form",
    "length",
    "width",
    "height",
    "tank",
    "consumption",
  ];

  const renderArray = renderElemArray(elem, camperValue);

//   const tableValues = (elem, camperValue) => {
//     if (camperValue[elem] === "fullyIntegrated") {
//       return "Fully integrated";
//     }
//     if (camperValue[elem] === "panelTruck") {
//       return "Panel truck";
//     }

//     if (camperValue[elem] === "alcove") {
//       return "Alcove";
//     }
//     return camperValue[elem];
//   };

  return (
    <div className={css.genDiv}>
      <ul className={css.elemUl}>
        {renderArray.map((item) => {
          return (
            <li key={renderArray.indexOf(item)} className={css.elemLi}>
               <svg className={css.icon} width="15" height="16">
            <use href={`${sprite}#${setIcon(item)}`}></use>
          </svg>
              <p className={css.elemP}>{item}</p>
            </li>
          );
        })}
      </ul>

	  <p className={css.details}>Vehicle details</p>

      <table className={css.table}>
        {/* <thead>
        <tr>
          <th className={css['trans-head-item']}>Type</th>
          <th className={css['trans-head-item']}>Amount</th>
          <th className={css['trans-head-item']}>Currency</th>
        </tr>
      </thead> */}




        <tbody>
          {elemTable.map((item) => {
            return (
              <tr
                className={css.tableTr}
                key={elemTable.indexOf(item)}
              >
                <td className={css.tableTd}>
                  {item[0].toUpperCase() + item.slice(1)}
                </td>
                <td className={css.tableTd}>
                  {tableValues(item, camperValue)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Features;
