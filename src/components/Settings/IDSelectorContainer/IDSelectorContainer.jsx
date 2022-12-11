import { useContext } from "react";
import { StoreContext } from "../../_contexts/StoreContext";

import IDSelector from "../IDSelector/IDSelector";

function IDSelectorContainer() {
  const store = useContext(StoreContext);

  const usersProfileInfo = store.getState().ProfileState.usersProfileInfo

  const getInfoFromBLL = () => {
    return store.getState().ProfileState.currentUserID;
  }

  const setInfoFToBLL = (userID) => {
    store.getState().ProfileState.currentUserID = userID;
  }

  return (
    <IDSelector getInfoFromBLL={getInfoFromBLL} setInfoFToBLL={setInfoFToBLL}    >
      {
        Object.keys(usersProfileInfo)
          .map((userID) => <option key={userID} value={userID}>{userID}</option>)
      }
    </IDSelector>
  )
}

export default IDSelectorContainer;