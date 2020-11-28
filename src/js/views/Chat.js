import React from 'react';
import { useParams } from 'react-router-dom';
import ChatMessagesList from '../components/ChatMessagesList';
import ChatUserList from '../components/ChatUserList';
import ViewTitle from '../components/shared/ViewTitle';
import { withBaseLayout } from '../layouts/Base';

const Chat = () => {
  const { id } = useParams();
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        {/* ########## USER LIST START ############ */}
        <ChatUserList />
        {/* ########## USER LIST END ############ */}
      </div>
      <div className="col-9 fh">
        {/* ########## CHAT NAME CONTAINER START ############ */}
        <ViewTitle text={`Joined Channel: ${id}`} />
        {/* ########## CHAT NAME CONTAINER END ############ */}
        <ChatMessagesList />
      </div>
    </div>
  )
}

export default withBaseLayout(Chat, { canGoBack: true });