'use client'
import React, { useState, useRef, useEffect } from 'react'
import { MoreVertical } from 'lucide-react'
import { IProduct } from '@/interfaces/product.interface'
import { timeAgo } from '@/utils/time-ago'


export default function ProductCard({ product }: { product: IProduct }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault()
    alert(`Edit ${product.title}`)
    setMenuOpen(false)
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault()
    alert(`Delete ${product.title}`)
    setMenuOpen(false)
  }

  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      {/* Dropdown menu */}
      <div ref={menuRef} className="absolute top-2 right-2 z-10">
        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          className="p-1 rounded-full hover:bg-gray-200"
        >
          <MoreVertical className="w-6 h-6 text-gray-600" />
        </button>

        {menuOpen && (
          <div className="mt-2 w-28 bg-white rounded-md shadow-lg absolute right-0">
            <a
              href="#"
              onClick={handleEdit}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Edit
            </a>
            <a
              href="#"
              onClick={handleDelete}
              className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100"
            >
              Delete
            </a>
          </div>
        )}
      </div>

      {/* Product Link */}
      <a
        href={product.link || '#'}
        target={product.link ? '_blank' : undefined}
        rel={product.link ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
          {product.description && (
            <p className="text-gray-600 text-sm">{product.description}</p>
          )}
          {product.createdAt && (
            <p className="text-gray-400 text-xs mt-2">
              {timeAgo(product.createdAt!)}
            </p>
          )}
        </div>
      </a>
    </div>
  )
}
