export const MOCK_POSTS = [
  {
    id: 0,
    title: "Feign 코드 분석과 서버 성능 개선",
    author: "김성두",
    date: new Date("2023-11-22"),
    thumbnailImg:
      "https://static.toss.im/assets/payments/contents/feign-thumb.jpg",
    contents: `
      <div>
        <aside>
          <h3>엔지니어링 노트 3: Feign 코드 분석과 서버 성능 개선</h3>
          <p>
            엔지니어링 노트 시리즈는 토스페이먼츠 개발자들이 제품을 개발하면서
            겪은 기술적 문제와 해결 방법을 직접 다룹니다. Feign과 다중 스레드를
            사용하는 과정에서 생긴 문제를 이해하고 성능 개선까지 한 경험을
            공유해요.
          </p>
        </aside>
        <div>
          <p>
            얼마 전 토스페이먼츠 서버 모니터링 시스템을 통해 성능 저하 문제를
            발견했어요. 약 15,000건 정도의 데이터를 10분 내외로 처리해야 하는
            요구사항이 있어 다중 스레드를 활용했는데, 여기서 예상치 못하게
            동시성 문제가 생겼습니다. 문제의 핵심은 HTTP 클라이언트 인터페이스인
            Feign의 내부 구조에 숨어있었어요. 보통 Feign은 기본 설정을 그대로
            사용하기 때문에 여기서 문제가 생길 거라고 예상하지 못했어요. 그래서
            이번 문제를 해결하면서 직접 Feign의 내부를 들여다보았습니다. 그
            내용과 문제 해결 과정을 공유드릴게요.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 1,
    title: "null 리턴은 왜 나쁠까?",
    author: "나재은",
    date: new Date("2023-11-08"),
    thumbnailImg:
      "https://static.toss.im/ml-illust/programmer-handling-code-box-with-highlighting-lines_20231106_111448975.png",
    contents: `
      <div>
        <aside>
          <h3>엔지니어링 노트 2: 코드 복잡성 관리하기</h3>
          <p>
            엔지니어링 노트 시리즈는 토스페이먼츠 개발자들이 제품을 개발하면서 겪은 기술적 문제와 해결 방법을 직접 다룹니다. 두 번째로 코드 복잡성을 관리하는 방법을 소개합니다.
          </p>
        </aside>
        <div>
          <p>
            개발자의 고객은 누구라고 생각하시나요? 우리 제품을 사용하는 사용자(End-user)죠. 그런데 또 다른 고객이 있어요. 컴파일 타임의 고객, 바로 동료 개발자입니다. 복잡하고 나쁜 코드는 사용자 고객에게는 버그와 장애를, 개발자 고객에게는 낮은 생산성을 줍니다. 이번 시리즈에서는 사용자 고객뿐 아니라 개발자 고객을 위한 코드 복잡성 관리에 대해 이야기해 볼게요.
          </p>
          <p>
            먼저 내 코드가 얼마나 복잡한지 체크리스트로 확인해 볼게요.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 2,
    title: "웹에서 복잡한 퍼널 쉽게 관리하기",
    author: "임재후/최수민",
    date: new Date("2023-10-18"),
    thumbnailImg:
      "https://static.toss.im/assets/payments/contents/engineering_thumb.jpg",
    contents: `
      <div>
        <aside>
          <h3>엔지니어링 노트 1: 복잡한 퍼널 쉽게 관리하기</h3>
          <p>
            엔지니어링 노트 시리즈는 토스페이먼츠 개발자들이 제품을 개발하면서 겪은 기술적 문제와 해결 방법을 직접 다룹니다. 첫 번째는 프론트엔드 이야기인데요. 웹에서 퍼널을 손쉽게 관리할 수 있도록 만든 모듈을 소개합니다.
          </p>
        </aside>
        <div>
          <p>
            토스 제품 디자인 원칙(PP: Product Principle)엔 “One thing for One Page”라는 원칙이 있어요. 화면 하나에는 명확한 목표 하나만 있어야 한다는 건데요. 이 원칙에 따라 제품을 만들다 보면 ‘퍼널’이 많이 생깁니다. 토스페이먼츠의 제품도 예외는 아니에요. 그래서 저희 프론트엔드 개발자들은 퍼널의 흐름을 잘 관리해야 하죠. 퍼널이란 사용자가 웹사이트를나 애플리케이션을 방문해서 최종 목표까지 달성하는데 거치는 단계를 뜻합니다.
          </p>
          <p>
            오늘은 토스페이먼츠의 프론트엔드 개발자들이 이 흐름을 어떻게 관리하고 있는지 소개하고, 이 방법의 좋은 점과 아쉬운 지점까지 공유해 볼게요.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 3,
    title: "유연하고 안전하게 배포 Pipeline 운영하기",
    author: "김동석",
    date: new Date("2023-10-12"),
    thumbnailImg:
      "https://static.toss.im/career-resource/techblog_slash23_thumb_06_%EA%B9%80%EB%8F%99%EC%84%9D.png",
    contents: `
      <div>
        <p>
          토스뱅크에는 400개가 넘는 배포 Pipeline 이 있습니다. Pipeline의 개수가 많아지고, 종류가 다양해지고, 동작이 복잡해지며 여러 어려움이 생기는데요. 토스뱅크에서 Pipeline을 유연하고 안전하게 운영하기 위해 노력한 이야기를 소개해 보려 합니다.
        </p>
      </div>
    `,
  },
];