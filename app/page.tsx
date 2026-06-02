export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Microsoft JhengHei, sans-serif",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* 首頁橫幅 */}
      <section
        style={{
          background: "linear-gradient(135deg,#0f766e,#14b8a6)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          合泰醫療器材有限公司
        </h1>

        <p
          style={{
            fontSize: "22px",
            marginBottom: "30px",
          }}
        >
          專業醫療器材｜長照設備｜居家照護｜復健輔具
        </p>

        <a
          href="https://line.me/ti/p/zYa6yeHHpQ"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#06C755",
            color: "#fff",
            padding: "16px 35px",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          加入 LINE 免費諮詢
        </a>
      </section>

      {/* 公司介紹 */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "32px",
          }}
        >
          關於我們
        </h2>

        <p
          style={{
            textAlign: "center",
            lineHeight: "2",
            color: "#555",
          }}
        >
          合泰醫療器材有限公司致力於提供高品質醫療設備、
          長照輔具及居家照護解決方案，
          協助醫院、診所、長照機構與家庭照護提升照護品質。
        </p>
      </section>

      {/* 服務項目 */}
      <section
        style={{
          background: "#ffffff",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
          }}
        >
          服務項目
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "醫療耗材供應",
            "輪椅與輔具設備",
            "居家照護設備",
            "復健器材",
            "診所設備採購",
            "長照機構整體規劃",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#f1f5f9",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 合作案例 */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
          }}
        >
          合作案例
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,.08)",
            }}
          >
            <h3>診所設備建置</h3>
            <p>協助基層診所完成醫療設備與耗材採購規劃。</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,.08)",
            }}
          >
            <h3>長照機構合作</h3>
            <p>提供長照中心輔具、病床及照護設備整合方案。</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,.08)",
            }}
          >
            <h3>居家照護方案</h3>
            <p>提供家庭照護設備與專業建議服務。</p>
          </div>
        </div>
      </section>

      {/* 聯絡表單 */}
      <section
        style={{
          background: "#ffffff",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
          }}
        >
          聯絡我們
        </h2>

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <input
            type="text"
            placeholder="姓名"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="tel"
            placeholder="電話"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <textarea
            placeholder="需求內容"
            rows={6}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "15px",
              background: "#0f766e",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            送出詢問
          </button>
        </div>
      </section>
    </main>
  );
}