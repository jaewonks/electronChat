import React, { useEffect } from 'react';
import JoinedChatsList from '../components/JoinedChatsList';
import AvailableChatsList from '../components/AvailableChatsList';
import ViewTitle from '../components/shared/ViewTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '../actions/chats';
import { withBaseLayout } from '../layouts/Base';

const Home = () => {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => chats.items);

  useEffect(() => {
    dispatch(fetchChats())
  }, [dispatch]);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        {/* ########## CHAT LIST START ############ */}
        <JoinedChatsList chats={chats} />
        {/* ########## CHAT LIST END ############ */}
      </div>
      <div className="col-9 fh">
        {/* ########## CHAT NAME CONTAINER START ############ */}
        <ViewTitle text='Choose your channel'/>
        {/* ########## CHAT NAME CONTAINER END ############ */}
        {/* ########## CHAT LIST START ############ */}
        <AvailableChatsList chats={chats} />
        {/* ########## CHAT LIST END ############ */}
      </div>
    </div>
  )
} 

export default withBaseLayout(Home);