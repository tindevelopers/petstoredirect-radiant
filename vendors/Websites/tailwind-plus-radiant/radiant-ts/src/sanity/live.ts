import { defineLive } from 'next-sanity'
import { client } from './client'

// For now, we'll use a simple implementation without live preview
export const sanityFetch = client.fetch
export const SanityLive = () => null
