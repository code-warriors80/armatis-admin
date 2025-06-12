import Header from '@/components/Header'
import MessageList from '@/components/message/message-list'
import React from 'react'

const MessagePage = () => {
  return (
    <div className="">
      <Header title="Amarits-Consulting" subtitle="Administrative Dashboard" />

      {/* Add spacing between header and title */}
      <div className="mt-6 mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Messages Received</h2>
        <p className="text-gray-600">Manage your Users Messages here.</p>
      </div>

      <MessageList />
    </div>
  )
}

export default MessagePage
