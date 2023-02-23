import { createClient } from 'next-sanity'

export const sanityClient = createClient({
	projectId: 'u37l6ex5',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: false,
})
