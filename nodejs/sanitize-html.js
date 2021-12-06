// sanitize-html 사용법
// 1. 해당 프로젝트 폴더에서 cmd - npm init으로 package.json파일 생성
// 2. npm install -S sanitize-html (-S는 sanitize를 현재 프로젝트 폴더에서만 사용할 수 있게 설치하는 명령어)

// 기본
var sanitizeHTML = require('sanitize-html');
var dirty = "<script>alert('hi');</script>"
var clean = sanitizeHTML(dirty);

// 태그허용
var sanitizeHTML = require('sanitize-html');
var dirty = "<h1>alert('hi');</h1>"
var clean = sanitizeHTML(dirty,{
  allowedTags:['h1', 'a'],
  allowedAttributes: { a: ['href'] },
  allowedFrameHostnames: ['www.youtube.com']
});