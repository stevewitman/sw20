module.exports = {
  name: 'sw20',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw20',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
