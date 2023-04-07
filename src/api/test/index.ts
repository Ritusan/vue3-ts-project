import http from '@/service/index'

enum Api {
  testData = '/api/testdata',
  testPost = '/api/postTestList',
  testPatch = '/api/patchTestList',
  testPut = '/api/putTestList',
  testDelete = '/api/deleteTestList'
}

export const testData = (params?: any) => {
  return http.get<any>(Api.testData, params)
}
export const testPost = (data: any) => {
  return http.post<any>(Api.testPost, data)
}
