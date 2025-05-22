import Header from '@/components/Header'
import MessageList from '@/components/message/message-list'
import React from 'react'

const MessagePage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 bg-gray-50">
      <Header title="Amartis-Consulting" subtitle="Administrative Dashboard" />

      {/* Add spacing between header and title */}
      <div className="mt-6 mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Messages Received</h2>
      </div>

      <MessageList />
    </div>
  )
}

export default MessagePage
