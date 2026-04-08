# 시크릿 및 변수 관리

CI/CD 파이프라인에서 사용되는 민감한 정보(비밀번호, API 키, 토큰 등)는 안전하게 관리되어야 합니다.

## 시크릿 관리자 (Secret Managers)
Harness는 기본 내장 Secret Manager를 제공하며, 외부 도구와 연동할 수 있습니다:
- **Harness Built-in Secret Manager** (기본)
- **HashiCorp Vault**
- **AWS Secrets Manager**
- **GCP Secret Manager**
- **Azure Key Vault**

## 규칙 및 모범 사례
1. **파이프라인에 평문 저장 금지**: 스크립트나 환경 변수에 비밀번호를 직접 입력하지 마십시오.
2. **Harness Secrets 사용**: 모든 민감 정보는 `<+secrets.getValue("SECRET_NAME")>` 표현식을 사용하여 참조하십시오.
3. **스코프(Scope) 최소화**: 시크릿의 접근 권한을 특정 프로젝트나 환경으로 제한하여 최소 권한의 원칙을 적용하십시오.
