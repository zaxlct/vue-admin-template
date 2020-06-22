const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return localStorage.TokenKey
}

export function setToken(token) {
  return localStorage.set(TokenKey, token)
}

export function removeToken() {
  return localStorage.remove(TokenKey)
}
