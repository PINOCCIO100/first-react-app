import { StoreContext } from "../../_contexts/StoreContext";

import IDSelector from "../IDSelector/IDSelector";

function IDSelectorContainer() {

  return (

    <StoreContext>
      {
        store => {
          const usersProfileInfo = store.getState().ProfileState.usersProfileInfo

          const getInfoFromBLL = () => {
            return store.getState().ProfileState.currentUserID;
          }
          const setInfoFToBLL = (userID) => {
            store.getState().ProfileState.currentUserID = userID;
          }
          return (
            <IDSelector
              getInfoFromBLL={getInfoFromBLL}
              setInfoFToBLL={setInfoFToBLL}
            >
              {
                Object.keys(usersProfileInfo)
                  .map((userID) => <option key={userID} value={userID}>{userID}</option>)
              }
            </IDSelector>
          )
        }
      }
    </StoreContext>
  );
}

export default IDSelectorContainer;