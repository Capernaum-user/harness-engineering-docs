# Harness 딜리게이트 (Delegates) 관리

Harness 딜리게이트는 Harness SaaS와 프라이빗 인프라 간의 통신을 담당하는 소프트웨어 에이전트입니다.

## 딜리게이트 유형
- **Kubernetes Delegate**: K8s 클러스터 내에 파드로 배포됨. (권장)
- **Docker Delegate**: Docker 컨테이너로 실행.
- **VM Delegate**: Linux/Windows 가상 머신에 직접 설치.

## 배포 및 설정 가이드
1. Harness UI에서 Delegate 토큰을 생성합니다.
2. 타겟 클러스터에 배포용 Manifest(`harness-delegate.yaml`)를 적용합니다.
   ```bash
   kubectl apply -f harness-delegate.yaml
   ```
3. 딜리게이트가 Harness Manager와 정상적으로 연결되었는지 확인합니다.

## 딜리게이트 셀렉터 (Delegate Selectors)
파이프라인이 특정 네트워크나 리소스에 접근해야 할 때, `Selector` 태그를 사용하여 적절한 딜리게이트를 지정합니다.
- **예시**: 특정 VPC 내부 리소스에 접근해야 하는 경우, 해당 VPC에 배포된 딜리게이트에 `vpc-primary` 태그를 부여하고 커넥터에서 이 태그를 선택합니다.
- **우선순위**: 셀렉터를 지정하지 않으면 가용한 딜리게이트 중 하나가 임의로 선택됩니다.

## 유지보수
- 딜리게이트는 자동으로 최신 버전으로 업데이트되도록 구성하는 것이 좋습니다.
- 리소스 사용량(CPU, Memory)을 모니터링하여 OOM(Out of Memory) 방지를 위해 적절한 리소스 제한을 설정해야 합니다.
- 고가용성(HA)을 위해 최소 2개 이상의 딜리게이트 레플리카를 운영하는 것을 권장합니다.
