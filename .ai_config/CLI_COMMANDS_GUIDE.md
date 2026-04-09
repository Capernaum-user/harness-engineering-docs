# CLI Tools Quick Reference Guide (Gemini & Claude)

이 문서는 엔지니어링 작업 중 AI 에이전트를 효율적으로 제어하기 위한 CLI 명령어 단축어 및 옵션들을 정리합니다.

---

## 1. Claude CLI (Reference)

사용자가 언급하신 `claude`의 주요 위험/강력 옵션들입니다:

- **`claude --dangerously-skip-permissions --continue`**:
  - `--dangerously-skip-permissions`: 파일 수정, 명령 실행 시 사용자에게 확인(Prompt) 없이 즉시 실행합니다. (매우 주의 필요)
  - `--continue`: 이전 세션의 문맥이나 작업을 이어서 진행합니다.

---

## 2. Gemini CLI (Current Workspace Tool)

Gemini CLI는 더 안전하면서도 강력한 자동화 옵션들을 제공합니다. (사용자가 현재 사용 중인 도구)

### 2.1. 자율 모드 (Autonomous / YOLO Mode)
사용자 개입 없이 작업을 수행하고 싶을 때 사용합니다.

- **`--yolo`**: (You Only Live Once) 사용자 확인 단계를 건너뛰고 자율적으로 작업을 수행합니다.
- **`--non-interactive`**: 스크립트나 자동화 환경에서 사용자 입력을 요구하지 않도록 설정합니다.

### 2.2. 세션 및 컨텍스트 관리
- **`--continue`**: 이전 세션의 상태를 유지하며 이어서 대화합니다.
- **`--reset`**: 이전 컨텍스트를 삭제하고 깨끗한 상태에서 새 세션을 시작합니다.

### 2.3. 디버깅 및 분석 (Power User Options)
- **`--verbose`**: 내부 실행 과정(Tool call, API response 등)을 상세히 출력합니다.
- **`--no-spinner`**: 진행 중인 로딩 애니메이션을 끄고 텍스트 위주로 출력합니다 (로그 수집 시 유용).

---

## 3. 명령 종류별 매핑 (Mapping by Category)

| 기능 분류 | Claude CLI (예시) | Gemini CLI (표준) |
| :--- | :--- | :--- |
| **자율 실행** | `--dangerously-skip-permissions` | `--yolo` |
| **세션 이어하기** | `--continue` | `--continue` |
| **입력 생략** | (skip permissions에 포함) | `--non-interactive` |
| **도움말** | `-h` / `--help` | `--help` |

---

## 4. 보안 및 권장 사항
- `--yolo` 나 `--dangerously-skip-permissions`와 같은 옵션은 강력하지만, 예기치 않은 파일 수정을 방지하기 위해 항상 **Git 스테이징/커밋이 완료된 상태**에서 사용하시기를 권장합니다.
- 복잡한 리팩토링이나 대규모 파일 이동 전에는 반드시 백업 또는 `--verbose` 모드로 미리 확인하십시오.
