function App() {

  return (
    <>      
    <h1>Playboi Carti</h1>
      <div className="artist-container">
          <img src="https://pbs.twimg.com/media/GBXiTGEWAAAPBjk.jpg:large" className="artist-img" alt="artist"/>
            <div className="discography-box">
              <h2>Playboi Carti's Albums</h2>
                <details>
                  <summary>Discography</summary>
                  <ol>
                    <li>Whole Lotta Red (2020)</li>
                    <li>Die Lit (2018)</li>
                    <li>Playboi Carti (2017)</li>
                  </ol>
                </details>
                <details>
                  <summary>Top Tracks</summary>
                  <ol>
                    <li>Magnolia</li>
                    <li>Sky</li>
                    <li>Shoota (feat.Lil Uzi Vert)</li>
                    <li>wokeuplikethis*</li>
                    <li>Location</li>
                  </ol>
                </details>
                <details>
                  <summary>Learn More</summary>
                  <p>Playboi Carti, born Jordan Terrell Carter, is a prominent American rapper known for his energetic, mumble rap style and experimental approach to hip-hop. His hits like "Magnolia" and "Woke Up Like This" have cemented his influence in modern rap.</p>
                </details>
            </div>
      </div>
    </>
  )
}

export default App