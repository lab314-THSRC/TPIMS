export interface UserDto {
  id: string
  username: string
  email: string
  departmentId: string
  roles: RoleDto[]
}

export interface DepartmentDto {
  id: string
  name: string
  description?: string
}

export interface RoleDto {
  id: string
  name: string
  description?: string
}

export interface PermissionDto {
  id: string
  code: string
  description?: string
}

// Login Request
export interface LoginRequestDto {
  username: string
  password: string
}

// Login Response
export interface LoginResponseDto {
  token: string
  user: {
    id: string
    username: string
    department: string
    roles: string[]
    permissions: string[]
  }
}

// 資料庫設計
// 1.	users
// 	•	id (PK)
// 	•	username
// 	•	email
// 	•	password_hash
// 	•	department_id (FK → departments.id)
// 2.	departments
// 	•	id (PK)
// 	•	name
// 	•	description
// 3.	roles
// 	•	id (PK)
// 	•	name
// 	•	description
// 4.	permissions
// 	•	id (PK)
// 	•	code (唯一，如 user.create, report.view)
// •	description
// 5.	user_roles (多對多)
// 	•	user_id (FK → users.id)
// •	role_id (FK → roles.id)
// •	(PK = user_id + role_id)
// 6.	role_permissions (多對多)
// 	•	role_id (FK → roles.id)
// •	permission_id (FK → permissions.id)
// •	(PK = role_id + permission_id)

// ERD
// users ───< user_roles >─── roles ───< role_permissions >─── permissions
//    │                          │
//    └──────── department ──────┘
