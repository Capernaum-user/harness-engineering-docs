# 모니터링, 알림 및 장애 대응 (Observability)

파이프라인의 가시성을 확보하고 실패 상황에 신속하게 대응하기 위한 가이드입니다.

## 1. 알림(Notification) 설정
- **Slack 채널 연동**: 
  - `Critical Failure`: #ops-alerts (즉시 대응)
  - `Success/Normal`: #dev-builds (정보 공유)
- **라우팅 규칙**:
  - 파이프라인 단계별 `Step Failure` 시 즉시 담당자 멘션 알림 발송.

## 2. 배포 검증 (Continuous Verification)
- **데이터 소스 연동**: Prometheus, Datadog, NewRelic 커넥터를 통한 지표 수집.
- **자동 롤백 임계치**:
  - `Error Rate > 5%` (배포 후 5분간 관찰)
  - `Latency Increase > 200ms`
  - 위 지표 발생 시 Harness가 자동으로 이전 안정 버전으로 롤백 실행.

## 3. 트러블슈팅 매뉴얼 (Runbook)
### [Case 1] Delegate 연결 끊김 (Delegate Disconnected)
- **원인**: 클러스터 리소스 부족(OOM), 네트워크 차단, 토큰 만료.
- **해결**: 
  1. `kubectl get pods -n harness-delegate-ng` 상태 확인.
  2. `kubectl logs [POD_NAME]`를 통한 에러 로그 분석.
  3. 리소스 Limit 상향 조정 (2Gi -> 4Gi).

### [Case 2] 시크릿 참조 오류 (Secret Not Found)
- **원인**: Secret Manager 권한 부족, 변수명 오타.
- **해결**: 
  1. Harness UI에서 Secret Manager의 `Connectivity Test` 수행.
  2. `<+secrets.getValue("NAME")>` 표현식의 대소문자 확인.
