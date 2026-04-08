# Harness Engineering 프로젝트

이 저장소는 **Harness Intelligent CI/CD** 플랫폼을 기반으로 한 소프트웨어 빌드, 테스트, 배포 엔지니어링의 표준 가이드와 설정을 포함합니다.

## 1. 핵심 아키텍처 및 개념 (Architecture & Concepts)
- **[아키텍처 (ARCHITECTURE.md)](ARCHITECTURE.md)**: 전체 CI/CD 파이프라인 흐름 및 인프라 구성.
- **[딜리게이트 (DELEGATES.md)](DELEGATES.md)**: 인프라와 Harness SaaS를 연결하는 에이전트 관리.
- **[커넥터 (CONNECTORS.md)](CONNECTORS.md)**: 외부 툴 및 플랫폼 인증 관리.
- **[파이프라인 (PIPELINES.md)](PIPELINES.md)**: 서비스, 환경 정의 및 표준 파이프라인 단계.

## 2. 거버넌스 및 운영 (Governance & Operations)
- **[역할 및 권한 (RBAC.md)](RBAC.md)**: 접근 제어, 승인 프로세스 및 권한 모델.
- **[환경 가이드 (ENV_GUIDELINES.md)](ENV_GUIDELINES.md)**: 명명 규칙, 환경 분리 및 태깅 전략.
- **[모니터링 및 장애 대응 (OBSERVABILITY.md)](OBSERVABILITY.md)**: 알림 설정, 검증 기반 롤백 및 트러블슈팅.
- **[배포 전략 (DEPLOYMENT_STRATEGIES.md)](DEPLOYMENT_STRATEGIES.md)**: 무중단 배포를 위한 가이드라인.
- **[시크릿 관리 (SECRETS_MANAGEMENT.md)](SECRETS_MANAGEMENT.md)**: 민감 정보의 안전한 처리.

## 3. 실무 템플릿 (Templates)
- **[templates/](templates/)**: 즉시 사용 가능한 YAML 코드.
  - `delegate-k8s.yaml`: Kubernetes 딜리게이트 표준 매니페스트.
  - `standard-ci-pipeline.yaml`: 표준 빌드 및 푸시 파이프라인.

## 4. 협업 (Collaboration)
- **[기여 가이드 (CONTRIBUTING.md)](CONTRIBUTING.md)**: 파이프라인 수정 및 협업을 위한 규칙.

## 프로젝트 목적
이 문서는 단순한 가이드가 아닌, 하네스 엔지니어링의 **Best Practice**를 정의합니다. 모든 서비스는 위 문서에 정의된 표준을 준수하여 파이프라인을 구축함으로써 일관성 있는 배포 프로세스와 보안 수준을 유지해야 합니다.
