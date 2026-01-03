import React from "react";

const brandlogoData = [
  {
    id: 1,
    name: "Teknikbolaget AB",
    color: "#4A90D9",
  },
  {
    id: 2,
    name: "DataFlow Solutions",
    color: "#2E7D32",
  },
  {
    id: 3,
    name: "مؤسسة النخبة للتقنية",
    color: "#D4AF37",
  },
];

function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row justify-content-center">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-4 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div 
                  className="inner"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                  }}
                >
                  <span 
                    style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: brandlogo.color,
                      textAlign: 'center',
                    }}
                  >
                    {brandlogo.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
