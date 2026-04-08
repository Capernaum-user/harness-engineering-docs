# 파이프라인 구조 및 가이드

이 문서는 Harness 파이프라인의 표준 구조와 작성 가이드라인을 제공합니다.

## 파이프라인 핵심 엔티티
Harness CD 파이프라인은 다음 세 가지 요소의 조합으로 실행됩니다:
- **Service (서비스)**: 배포 대상인 애플리케이션 정의 (예: Artifact 정보, Manifest 등)
- **Environment (환경)**: 배포될 논리적 대상 (예: Development, Staging, Production)
- **Infrastructure (인프라)**: 환경 내에서 실제 연결 정보를 정의 (예: Kubernetes Cluster Connector + Namespace)

## 파이프라인 계층 구조
Harness 파이프라인은 다음 계층으로 구성됩니다:
- **Pipeline (파이프라인)**: 전체 워크플로우를 정의합니다.
- **Stage (스테이지)**: 빌드, 배포 등 논리적인 단계를 정의합니다. (예: CI Stage, CD Stage)
- **Step (스텝)**: 스테이지 내에서 실행되는 개별 작업입니다.

## 재사용성을 위한 템플릿 (Templates)
파이프라인 전체 또는 특정 스테이지/스텝을 **Template**으로 정의하여 재사용할 수 있습니다.
- **Remote Template**: Git 저장소에 YAML 파일로 관리하여 버전 제어 가능.
- **Inline Template**: Harness Manager 내부에 저장.

## 표준 CI 파이프라인 (Continuous Integration)
1. **Clone Repository**: 소스 코드 복제
2. **Run Tests**: 유닛 테스트 및 통합 테스트 실행
3. **Security Scan**: 코드 취약점 검사 (SAST/DAST)
4. **Build Image**: 컨테이너 이미지 빌드
5. **Push Artifact**: 레지스트리에 이미지 푸시

## 표준 CD 파이프라인 (Continuous Deployment)
1. **Fetch Artifact**: 배포할 아티팩트 정보 가져오기
2. **Approval**: 운영 환경 배포 전 승인 단계 (수동 또는 자동)
3. **Deploy**: 대상 인프라에 릴리스
4. **Verify**: 배포 후 상태 확인 및 헬스 체크
5. **Rollback (Failure)**: 실패 시 이전 버전으로 자동 롤백
