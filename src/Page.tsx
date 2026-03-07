import React from 'react'
import QRCode from 'qrcode.react'
import styled from 'styled-components'

// Styled container for the payment widget
const PaymentContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  max-width: 400px;
  margin: 30px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
`

const PaymentTitle = styled.h3`
  margin-bottom: 10px;
`

const PaymentAddress = styled.p`
  font-weight: bold;
  font-size: 14px;
  word-break: break-all;
  margin: 10px 0;
`

// BTC Payment Widget Component
const PaymentWidget: React.FC = () => {
  const btcAddress = '37Xa3AVY4xjVWVdK4sTkEHDXmpqfoUzA22'
  const paymentString = `bitcoin:${btcAddress}`

  return (
    <PaymentContainer>
      <PaymentTitle>Support Aura with Bitcoin</PaymentTitle>
      <QRCode value={paymentString} size={200} />
      <PaymentAddress>{btcAddress}</PaymentAddress>
      <p style={{ fontSize: '12px', color: '#666' }}>
        Scan this QR code or copy the address to send BTC
      </p>
    </PaymentContainer>
  )
}

// Main Aura Page
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <header>
        <h1>Aura — The Unified Knowledge Framework</h1>
        <nav style={{ marginBottom: '20px' }}>
          <a href="#docs" style={{ margin: '0 10px' }}>Docs</a>
          <a href="#extensions" style={{ margin: '0 10px' }}>Extensions</a>
        </nav>
      </header>

      <main>
        <h2>One Language. Infinite Knowledge.</h2>
        <p>
          Aura unifies mathematics, logic, computation, simulation, reasoning, and symbolic
          expression into a single extendable ecosystem.
        </p>

        {/* Bitcoin Payment Widget */}
        <PaymentWidget />
      </main>

      <footer style={{ marginTop: '40px', fontSize: '12px', color: '#666' }}>
        © 2026 Aura Project
      </footer>
    </div>
  )
}

export default App
