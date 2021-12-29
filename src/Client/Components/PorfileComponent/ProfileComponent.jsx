import React from "react";

// Custom Components
import Button from "Client/Components/Button/Button";

// Classes
import classes from "./ProfileComponent.module.css";

/**
 * ProfileComponent show client user info for matches
 * @param {profile} props
 * @param profile: object with `set` (bool profile is submit),`name`, `playerID`, `deckID` and `credentials` 
 * @returns JSX component that only shows player info
 */
const ProfileComponent = ({ profile, changeProfile }) => {
  const changeProfileHandler = () => {
    changeProfile();
  }

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>
        Player Information
      </h4>
      <>
        <div className={classes.profile}>
          <div className={classes.profileItem}>
            <p className={classes.profileItemLabel}>
              Name
            </p>
            <p className={classes.profileItemValue}>
              {profile.playerName || "No name"}
            </p>
          </div>
          <div className={classes.profileItem}>
            <p className={classes.profileItemLabel}>
              PlayerID
            </p>
            <p className={classes.profileItemValue}>
              {profile.playerID || "No playerID"}
            </p>
          </div>
        </div>
        <div className={classes.profileItem}>
          <p className={classes.profileItemLabel}>
            Deck ID
          </p>
          <p className={classes.profileItemValue}>
            {profile.deckID || "No Deck"}
          </p>
        </div>
        <div className={classes.profile}>

          <div className={classes.profileItem}>
            <p className={classes.profileItemLabel}>
              MatchID
            </p>
            <p className={classes.profileItemValue}>
              {profile.match.matchID || "No match found"}
            </p>
          </div>
          <div className={classes.profileItem}>
            <p className={classes.profileItemLabel}>
              Credential
            </p>
            <p className={classes.profileItemValue}>
              {profile.match.credential || "Enter in a match to get credentials."}
            </p>
          </div>
        </div>
        <Button
          classes={classes.profileInfoBtn}
          onClick={changeProfileHandler}
          text="change player"
          disabled={profile.credential ? true : false}
        />
      </>
    </div>
  );
}

export default ProfileComponent;