import React from "react";
import { Route, Switch } from "react-router-dom";
import MessageList from "./components/message/MessageList";
import ReplyMessage from "./components/message/ReplyMessage";

function MessageContent({ match }) {
  return (
    <>
      <Switch>
        <Route path={match.url + "/reply"} component={ReplyMessage} />
        <Route path={match.url + "/"} component={MessageList} />
      </Switch>
    </>
  );
}

export default MessageContent;
