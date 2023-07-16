import React from "react";
import { useTranslation, Trans } from "react-i18next";

function Home() {
  const [translate, i18n] = useTranslation();
  const messagesCount = 3;

  return (
    <div>
      <h3>Home Page Component</h3>

      {translate("description.part1")}
      <p>{translate("title", { name: "Mahmoud" })}</p>
      <p>{translate("description.part1")}</p>
      <p>{translate("description.part2")}</p>
      <Trans i18nKey="userMessagesUnread_one" messagesCount={{ messagesCount }}>
        {{ messagesCount }}
      </Trans>
      <p>
        {translate("userProfileMessage", {
          // pass some arguments which will replace variables with the same names at the translation files
          name: "Mahmoud",
          date: new Date(),
        })}
      </p>
    </div>
  );
}

export default Home;
