```

export const CREATE_USER_ROLES = {
  CreateVendor: "VENDOR",
  CreateUser: "USER",
};
export type CreateUserRole = (typeof CREATE_USER_ROLES)[keyof typeof CREATE_USER_ROLES];
```

type PaginationButtonProps = {
isActive?: boolean;
} & Pick<ButtonProps, "size"> &
React.ComponentProps<typeof Button>;

# 3

```
// We do this to lowercase the roles so ROLES.admin, etc.
export const ALL_ROLES = {
  CreateVendor: "VENDOR",
  CreateUser: "USER",
};
export type AllRoles = LowercaseKeys<typeof ALL_ROLES>;
export const ROLES = Object.fromEntries(
  Object.entries(ALL_ROLES).map(([key, value]) => [key.toLowerCase(), value]),
) as AllRoles;
```

getSchemaDefaults
