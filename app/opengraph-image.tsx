import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "AutoTreq — soluções automotivas, engenharia e manutenção técnica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

let antonFont: Buffer | undefined;

async function loadAnton() {
  if (!antonFont) {
    antonFont = await readFile(
      path.join(process.cwd(), "assets", "fonts", "Anton-Regular.ttf"),
    );
  }
  return antonFont;
}

export default async function OpenGraphImage() {
  const font = await loadAnton();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          background: "#111011",
          color: "#FFFFFF",
          padding: "58px 64px 52px 72px",
          fontFamily: "Anton, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 10,
            background: "#F77912",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -170,
            top: -110,
            width: 560,
            height: 560,
            display: "flex",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -60,
            top: 10,
            width: 380,
            height: 380,
            display: "flex",
            border: "1px solid rgba(247,121,18,0.22)",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            top: 110,
            width: 190,
            height: 190,
            display: "flex",
            border: "1px dashed rgba(255,255,255,0.12)",
            borderRadius: 9999,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 15,
            letterSpacing: 4,
            color: "rgba(255,255,255,0.62)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 26,
                height: 2,
                background: "#F77912",
                marginRight: 14,
                display: "flex",
              }}
            />
            AUTOTREQ / FIGUEIREDO LTDA.
          </div>
          <div style={{ color: "#F77912" }}>TERRA SANTA — PA</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 15, letterSpacing: 4, color: "#F77912" }}>
            SOLUÇÕES TÉCNICAS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 22,
              fontSize: 86,
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: 0,
            }}
          >
            <span>TÉCNICA NA ORIGEM.</span>
            <span style={{ display: "flex", alignItems: "baseline" }}>
              CONFIANÇA NA&nbsp;
              <span style={{ color: "#F77912" }}>ENTREGA</span>.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", letterSpacing: 1 }}>
              Engenharia mecânica · Automação industrial
            </span>
            <span style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", letterSpacing: 1 }}>
              Diagnóstico computadorizado · Manutenção técnica
            </span>
          </div>
          <div style={{ display: "flex", fontSize: 14, letterSpacing: 3, color: "rgba(255,255,255,0.4)" }}>
            09 / CONTATO
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Anton",
          data: font,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
