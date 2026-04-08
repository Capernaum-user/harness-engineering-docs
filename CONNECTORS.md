# 하네스 커넥터 (Connectors) 관리

커넥터는 Harness가 외부 도구 및 플랫폼(Git, Docker Registry, Cloud Providers 등)과 통신하기 위한 인증 및 연결 정보를 정의합니다.

## 주요 커넥터 유형
1. **Source Code Manager**: GitHub, GitLab, Bitbucket (코드 접근 권한)
2. **Artifact Registry**: Docker Hub, AWS ECR, GCP GCR, JFrog Artifactory (이미지 푸시/풀)
3. **Cloud Provider**: AWS, GCP, Azure, Kubernetes (배포 대상 인프라 인증)
4. **Secret Manager**: HashiCorp Vault, AWS Secrets Manager (민감 정보 조회)

## 설정 원칙
- **최소 권한 원칙**: 각 커넥터는 해당 작업에 필요한 최소한의 IAM 권한 또는 API 스코프만 가집니다.
- **딜리게이트 지정**: 커넥터가 특정 네트워크 내부의 자원에 접근해야 할 경우, 적절한 `Delegate Selector`를 지정하여 통신 경로를 확보합니다.
- **연결 테스트**: 커넥터 생성 후 반드시 'Connection Test'를 통과해야 파이프라인에서 사용할 수 있습니다.

## 기배포 환경 컨텍스트 (Pre-defined Environment Context)
에이전트(Gemini CLI)는 다음의 확보된 서버 환경 정보를 바탕으로 추가 질문 없이 작업을 수행합니다.
- **Cloud Platform**: Google Cloud Platform (GCP)
- **Project ID**: `free-trial-first-project`
- **Database**: Cloud SQL (MySQL) - IP: `34.22.98.158`
- **Region**: `asia-northeast3` (Seoul)
- **Service Account**: `p795994321014-n5datk@gcp-sa-cloud-sql.iam.gserviceaccount.com`

## 커넥터와 딜리게이트의 관계
커넥터는 "어디로(Where)" 연결할지를 정의하고, 딜리게이트는 "어떻게(How/Who)" 실제로 그 연결을 수행할지를 담당합니다. 대부분의 클라우드 커넥터는 딜리게이트의 IAM Role을 상속받아 인증하는 방식을 권장합니다.
