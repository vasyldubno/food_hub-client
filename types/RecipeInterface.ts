export interface Categories {
	name: string
}

export interface Child {
	_key: string
	_type: string
	marks: any[]
	text: string
}

export interface Description {
	_key: string
	_type: string
	children: Child[]
	markDefs: any[]
	style: string
}

export interface CreatedBy {
	id: string
	type: string
}

export interface UploadedBy {
	id: string
	type: string
}

export interface Image {
	_key: string
	_type: string
	_version: number
	access_control: any[]
	access_mode: string
	bytes: number
	created_at: Date
	created_by: CreatedBy
	duration?: any
	format: string
	height: number
	metadata: any[]
	public_id: string
	resource_type: string
	secure_url: string
	tags: any[]
	type: string
	uploaded_by: UploadedBy
	url: string
	version: number
	width: number
}

export interface Child2 {
	_key: string
	_type: string
	marks: string[]
	text: string
}

export interface Ingredient {
	_key: string
	_type: string
	children: Child2[]
	markDefs: any[]
	style: string
}

export interface Child3 {
	_key: string
	_type: string
	marks: string[]
	text: string
}

export interface Step {
	_key: string
	_type: string
	children: Child3[]
	markDefs: any[]
	style: string
}

export interface Recipe {
	author: string
	categories: Categories
	description: Description[]
	image: Image
	ingredients: Ingredient[]
	prep_time: string
	steps: Step[]
	title: string
	total_time: string
	yields: string
	_id: string
}
