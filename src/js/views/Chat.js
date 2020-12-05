import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessagesList from '../components/ChatMessagesList';
import ChatUserList from '../components/ChatUserList';
import ViewTitle from '../components/shared/ViewTitle';
import { withBaseLayout } from '../layouts/Base';
import { subscribeToChat } from '../actions/chats';

const Chat = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); //action과 connect
  const activeChat = useSelector(({chats}) => chats.activeChats[id]);
  useEffect(() => {
    const unsubFromChat = dispatch(subscribeToChat(id));
    return () => {
      unsubFromChat();
    }
  }, [])
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        {/* ########## USER LIST START ############ */}
        <ChatUserList users={activeChat?.joinedUsers} />
        {/* ########## USER LIST END ############ */}
      </div>
      <div className="col-9 fh">
        {/* ########## CHAT NAME CONTAINER START ############ */}
        <ViewTitle text={`Channel: ${activeChat?.name}`} />
        {/* ########## CHAT NAME CONTAINER END ############ */}
        <ChatMessagesList />
      </div>
    </div>
  )
}

export default withBaseLayout(Chat, { canGoBack: true });