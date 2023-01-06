export interface ProviderMetadata {
	public_id: string
	resource_type: string
}

export interface Thumbnail {
	name: string
	hash: string
	ext: string
	mime: string
	path?: any
	width: number
	height: number
	size: number
	url: string
	provider_metadata: ProviderMetadata
}

export interface ProviderMetadata2 {
	public_id: string
	resource_type: string
}

export interface Small {
	name: string
	hash: string
	ext: string
	mime: string
	path?: any
	width: number
	height: number
	size: number
	url: string
	provider_metadata: ProviderMetadata2
}

export interface ProviderMetadata3 {
	public_id: string
	resource_type: string
}

export interface Medium {
	name: string
	hash: string
	ext: string
	mime: string
	path?: any
	width: number
	height: number
	size: number
	url: string
	provider_metadata: ProviderMetadata3
}

export interface Formats {
	thumbnail: Thumbnail
	small: Small
	medium: Medium
}

export interface ProviderMetadata4 {
	public_id: string
	resource_type: string
}

export interface Attributes2 {
	name: string
	alternativeText?: any
	caption?: any
	width: number
	height: number
	formats: Formats
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl?: any
	provider: string
	provider_metadata: ProviderMetadata4
	createdAt: Date
	updatedAt: Date
}

export interface Data {
	id: number
	attributes: Attributes2
}

export interface Img {
	data: Data
}

export interface Localizations {
	data: any[]
}

export interface Attributes {
	title: string
	description: string
	ingredients: string
	steps: string
	author: string
	yields: string
	prep_time: string
	total_time: string
	category: string
	createdAt: Date
	updatedAt: Date
	locale: string
	cover: Img
	localizations: Localizations
}

export interface Recipe {
	id: number
	attributes: Attributes
}
