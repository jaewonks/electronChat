import React, { useEffect } from 'react';
import JoinedChatsList from '../components/JoinedChatsList';
import AvailableChatsList from '../components/AvailableChatsList';
import ViewTitle from '../components/shared/ViewTitle';
import { fetchChats } from '../api/chats';

export default () => {
  useEffect(() => {
    fetchChats().then(chats => {
      debugger
    });
  }, []);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        {/* ########## CHAT LIST START ############ */}
        <JoinedChatsList />
        {/* ########## CHAT LIST END ############ */}
      </div>
      <div className="col-9 fh">
        {/* ########## CHAT NAME CONTAINER START ############ */}
        <ViewTitle text='Choose your channel'/>
        {/* ########## CHAT NAME CONTAINER END ############ */}
        {/* ########## CHAT LIST START ############ */}
        <AvailableChatsList />
        {/* ########## CHAT LIST END ############ */}
      </div>
    </div>
  )
} 