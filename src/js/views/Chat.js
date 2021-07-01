import React from "react"
import { useParams } from "react-router"

import ChatUserList from "../components/ChatUsersList"
import ViewTitle from "../components/shared/ViewTitle"
import ChatMessagesList from "../components/ChatMessagesList"


export default function Chat() {
  const { id } = useParams()

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={`Joined channel: ${id}`} />
        <ChatMessagesList />
      </div>
    </div>
  )
}