import React, { useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ChatUserList from '../components/ChatUserList';
import ChatMessagesList from '../components/ChatMessagesList';
import ViewTitle from '../components/shared/ViewTitle';
import { withBaseLayout } from '../layouts/Base';
import LoadingView from '../components/shared/LoadingView';
import Messanger from '../components/Messanger';
import { 
    subscribeToChat, 
    subscribeToProfile, 
    sendChatMessage,
    subscribeToMessages
  } from '../actions/chats';

const Chat = () => {
  const { id } = useParams();
  const peopleWatchers = useRef({});
  const dispatch = useDispatch(); //action과 connect
  const activeChat = useSelector(({chats}) => chats.activeChats[id]);
  const messages = useSelector(({chats}) => chats.messages[id]);
  const joinedUsers = activeChat?.joinedUsers;

  useEffect(() => {
    const unsubFromChat = dispatch(subscribeToChat(id));
    dispatch(subscribeToMessages(id));
   /*  if (!messagesSub) {

    } */
    return () => {
      unsubFromChat();
      unsubFromJoinedUsers();
    }
  }, []) 

  useEffect(() => {
    joinedUsers && subscribeToJoinedUsers(joinedUsers);
  }, [joinedUsers]) // joinedUsers의 state가 변경되었을때만 rendering

  const subscribeToJoinedUsers = useCallback(jUsers => {
    jUsers.forEach(user => {
      if(!peopleWatchers.current[user.uid]) {
        peopleWatchers.current[user.uid] = dispatch(subscribeToProfile(user.uid, id))
      }
    })
  }, [dispatch, id])

  const sendMessage = useCallback(message => {
    dispatch(sendChatMessage(message, id))
  }, [id])

  const unsubFromJoinedUsers = useCallback(() => {
    Object.keys(peopleWatchers.current)
      .forEach(id => peopleWatchers.current[id]())
  }, [peopleWatchers.current])

if (!activeChat?.id) {
    return <LoadingView message='Loading Chat...' />
  }

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
        <ChatMessagesList messages={messages} />
        <Messanger onSubmit={sendMessage} />
      </div>
    </div>
  )
}

export default withBaseLayout(Chat, { canGoBack: true });