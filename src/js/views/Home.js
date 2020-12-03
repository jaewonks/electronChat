import React, { useEffect } from 'react';
import JoinedChatsList from '../components/JoinedChatsList';
import AvailableChatsList from '../components/AvailableChatsList';
import ViewTitle from '../components/shared/ViewTitle';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchChats } from '../actions/chats';
import { withBaseLayout } from '../layouts/Base';
import Notifications from '../utils/notifications';

const Home = () => {
  const dispatch = useDispatch();
  const joinedChats = useSelector(({chats}) => chats.joined)
  const availableChats = useSelector(({chats}) => chats.available)

  useEffect(() => {
    Notifications.setup()
    dispatch(fetchChats())
  }, [dispatch]);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        {/* ########## CHAT LIST START ############ */}
        <JoinedChatsList chats={joinedChats} />
        {/* ########## CHAT LIST END ############ */}
      </div>
      <div className="col-9 fh">
        {/* ########## CHAT NAME CONTAINER START ############ */}
        <ViewTitle text='Choose your channel'>
          <Link 
            className='btn btn-outline-primary btn-sm'  
            to='/chatCreate' >New</Link>
        </ViewTitle>  
        {/* ########## CHAT NAME CONTAINER END ############ */}
        {/* ########## CHAT LIST START ############ */}
        <AvailableChatsList chats={availableChats} />
        {/* ########## CHAT LIST END ############ */}
      </div>
    </div>
  )
} 

export default withBaseLayout(Home);