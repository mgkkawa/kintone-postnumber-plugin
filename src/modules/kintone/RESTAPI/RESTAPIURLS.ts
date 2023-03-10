export default {
  /**
   * @method GET
   * @Requests app, id
   * @app アプリID ( string | number )
   * @id レコードID ( string | number )
   *
   */
  record: '/k/v1/record',

  records: '/k/v1/records',
  cursol: '/k/v1/records/cursor',
  comment: '/k/v1/record/comment',
  assignees: '/k/v1/record/assignees',
  status: '/k/v1/record/status',
  request: '/k/v1/bulkRequest',
  file: '/k/v1/file',
  fields: '/k/v1/app/form/fields',
  prevFields: '/k/v1/preview/app/form/fields',
  layout: '/k/v1/app/form/layout',
  prevLayout: '/k/v1/preview/app/form/layout',
  views: '/k/v1/app/views',
  prevViews: '/k/v1/preview/app/views',
  app: '/k/v1/app',
  apps: '/k/v1/apps',
  settings: '/k/v1/app/settings',
  prevSettings: '/k/v1/preview/app/settings',
  prevStatus: '/k/v1/preview/app/status',
  customize: '/k/v1/app/customize',
  prevCustomize: '/k/v1/preview/app/customize',
  notifications: '/k/v1/app/notifications/general',
  prevNotifications: '/k/v1/preview/app/notifications/general',
  perRecord: '/k/v1/app/notifications/perRecord',
  prevPerRecord: '/k/v1/preview/app/notifications/perRecord',
  reminder: '/k/v1/app/notifications/reminder',
  prevReminder: '/k/v1/preview/app/notifications/reminder',
  acl: '/k/v1/app/acl',
  prevAcl: '/k/v1/preview/app/acl',
  recordAcl: '/k/v1/record/acl',
  prevRecordAcl: '/k/v1/preview/record/acl',
  evaluate: '/k/v1/records/acl/evaluate',
  fieldAcl: '/k/v1/field/acl',
  precFieldAcl: '/k/v1/preview/field/acl',
  reports: '/k/v1/app/reports',
  prevReports: '/k/v1/preview/app/reports',
  actions: '/k/v1/app/actions',
  prevActions: '/k/v1/preview/app/actions',
  deploy: '/k/v1/preview/app/deploy',
  form: '/k/v1/form',
  prevForm: '/k/v1/preview/form',
  space: '/k/v1/space',
  template: '/k/v1/template/space',
  spaceBody: '/k/v1/space/body',
  thread: '/k/v1/space/thread',
  threadComment: '/k/v1/space/thread/comment',
  members: '/k/v1/space/members',
  guest: '/k/v1/guests',
  apis: '/k/v1/apis',
}
