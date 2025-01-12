import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <div className="header-content">
            <h1>Profile Management</h1>
            <nav>
              <Link to="/" className="nav-link">Overview</Link>
              <Link to="/orders" className="nav-link">Orders</Link>
              <Link to="/settings" className="nav-link">Settings</Link>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Overview() {
  return (
    <div className="overview">
      <div className="profile-header">
        <div className="cover-photo">
          <img src="https://wallpapers.com/images/hd/technology-linkedin-background-dce01jsbpnn0z2ej.jpg" alt="Cover" />
        </div>
        <div className="profile-info">
          <div className="profile-picture">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFhUXFRcVFhcXFRUYFRUXFRYWFxUWFxYYHSggGRolHRcVIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lHyYtLS0wLS0tLS0tMC8tLS0tLS8tLy0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYHAQj/xABKEAACAQIDBAcDCQYEBQIHAAABAgMAEQQSIQUxQVEGEyJhcYGRMkJSBxQjYoKhscHRM1NykqLwQ3Ph8RVjssLSNKMWJDVUk5Sz/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDBAUABv/EADARAAICAQMBBgUEAgMAAAAAAAABAhEDEiExBBMiMkFRYRRxgbHwBUKR0VKhI0PB/9oADAMBAAIRAxEAPwDktKvbUrVvMIhXtKmlz8JPp+tePVY+1ehbkAC5OgG8nwHGpmCwKsC7yBVBsbK9yT7oLAAt3DNVsZYMMuYKbm4HF2I3gcgOO4CjtyeSKx9mmJQ0hCk+ygVXYnlrx7h6gXIJgZVADMLgkqAO0XOt1X953k/Rjgp31BxUskz66E+3vIjU7ol5k6X5k201vY4aPNdUOUKLSSjeAP8ADQ7gBxI0HjULuWxpSpbjNsbSLHI7so3dVEbyP3O3uru0Nz9UbhSvtHq9IkSM/VAdx4yNfX+G1Oxk6s3VYZND2bgdp+YHJfvPE1e7G2CkA66cqWXXXVE8B77eFJUpsO0UB2P0emxFnxMjhOCliWb19kffWnw/UwApEqRBVzO1hmC8GYm9u7Ncm27jVFtLbzF+qiGtwDf2mdtEjNtwvqwHIjncJbPIMMjXsxMj8Xl0zSd4UkWG7TuFVjKMfDyI03ySsdjXIaYAxxDsq2/Ezub2RWNzGt+WosfAbfovtbDbJwryuuaZ7dYw7TyyHdEha5yruF77mY7rNi9okNi4IRbq4E6yxOmbct/A5Ne81QYnaLYvFxAE5BIqoO7MCWP1ja58uVLOt754GifRWxdpQY+NYJ4lbPmlsfdMjPKhVt6soKWYWNzwrHR9NJNmYn5pj2bEYKQsscsnbngynK6yH/ECk2O+4IIv7NQcDjuqMZU23BdeAUkD0Ws301xPzlZjmv8ASyEc1eFmCXH1oRbX4Ur0+nSVoMMrezOrbWCO7fN2Uzxx5o83azQydpcjA5mha24G66lD2WjomxOkgIjDt83aTsxsCXwsjXK9UyP+xlzBgYyVJZSA72NcR6PdI5eoVQx67CXkgN9TAx+ngJ+G1mHK1hvraYDa0UjtFMM8GJQPawJVio7QBPvquq8TCToxBEo49SHc6OtYzCNIMkigHh2I5IpO60i7/qkqeTNa9c86TdGoSGZ8DcLo02z2ySR8bSYKXRRbW99241cdDulL4eX5hi36xbFsJPcsZI11aNidWdBqDvKjdmFq0vSjZXWIJomcOq9mSE/Sqp1BUg/SLzjOjDdrvlcsbKR0y2Z88Y3ZC3Jw86zrc2FjFNzsYX1Y/wCWXGnCqyRCpIIII3gixHiDWr6TuGkK4tF6wgMuJgVQJVPsu8WiSA/EuRhYg3Iy1l5lIsMwYAaEElbdwNiPAgHuroY3aTMGaKjJoDakadam2qjRIaa8tT68NLQRteV7alQoIr0q8r2vHjylSr29ePHlENkAZwSWF0jF8zj4jbVU7954aa1OhwyRKJZuP7NLZi31inHuB04ngCDCsZnLMMsZaxF80kz2vld/eAGpAso00pJNrZDwS5Y/Bs1hPLqfZiQaBQ25UHAnnwGvGomKYyMBmBZtLj2bKbnKP3a2IA94gnhT8Tis7NIT2RdVtbduZh3sbKO63jQ9lG8jMbZgth8KkkBR4KASfCoSdvSaEqVljg8JmORbgL7R4i+8X/eEHU+6DYcTQNq4kuwwuHAtua27ThfkNb0baOKMarBDcu44bwDvYnmddfE8qi7JTqmyXA7OeR94ygmwB+Hce/QcaZ0u6gLfct8LBDgoi7G7cW95j8K8hTJMRI6hv8RiFjX3UZtR/IvaJtqbcAKqZcR15kna+SOyRg8M5tm8QLnxtyq+iYI5dtOrjYKOANg8rD1Vfsmjd7Lg9VbvkzMDiJ5nU/syyxknUu11DeNg7VbdB8PbPKeWUX8d/wCNZZWZgEHFr+JOg/P1rQYjHdVhQsZHafKp5qntN5vc/aqUJU7HkrVEbbu0Pp5yu9gI7/V0v6gAVB2KxE6EcDf7jUORySSd5qbsOwnRjuUlz3BAWP4ffS3crDVI2WP2iBiIYgdI37X2YiT9zCqH/iBLSE7xMb96s7Mp8A5YHulqAu0SZOtPtfSP5voB99qgQSWuOBUg/iPvAPlTyyNsEY0HwM/VTAg6BrX7jpf86v8AYGKtL1fwHs8wolFvRZJfWsqTVnsif6fNwIa/mv60sJUwtGvm2o08HZJWWMmaIg6pLCRnQHnbUcw/dW7+T75QFsqyH6JwzAb+qZRmxEXctryoOQkUDRQOKbM2iUkLc2zDubW3qCynuY1I2di2ilZENrOJIjvtIhzRnXmND3GjOWtbgiqO7/KN0K62N58MLkEyGNRc5j2pGjtvDizFR7wDDUvm4pLHau0fJ50nWfAxgFgEd8MLHtgIBJh7E8REWW53tGN9ZTpXBDipnRgkGOVrcFw2OBsUeNibRSupVgGNmzDW5uH6fLp7r4Ez4nNalyc9IrwijzwsjFWUqykhlYEMpG8EHUGhEVuowDCKaRRLV4RQGTBkV4RT68IoUMMtSp1q9oHhlPhlVTcgMR7KcCeBf6g3247t16YaLgMMGcKxsguztyCjM7eS3t4illfCHjXLJWQteaViWa5DHWyr7T2+EXsFGhYjhvgSYrWRhoI48iL8Jc238W3knib91T9r4qwZrZcoXs/C1rwxfYBzkc9OFU+z8OWRr6AnT6xVXNh3a61DLLvUi2OO242Visa34+z6e15bh434UPZty1hu0LHcAo33PDxp20ZeskZr2UHKPAbgPx86AJiRkA0PAcSdATzNQ8yxPnxZZikOrObM40LcMq/Cn6V7tScIvVLoSEz+CooVPDS/nUjCYUwRtJp1hViPqgb7czuud2oA41V41swU7zlGvMf739RRdoCJ8MoGCI4mb8Ap/CmbZ2gTIwGnZyn7RzuP5iR9mq6JyQEvoWB8DupuIa7MeZJ9Teg5BoYrW3VKx81wiDcqj1NiT6ZfSoles16UJ5T0kIvbiLHwuD+VNAqQuCblY2vZtPvOg8yK8eI1KrWLZZNgwKsdx4HyPDvuPOpMWxLDfe/p32b/AE86bSwWUNPRyL24i1aFtjKeHeajf8G0PP8AQD870dDPWikp4kNwb6j8qnT7MYbhVeRStUE3/wAn20xHDjBmICvhsTYfDDIzSgAc00rV/KNsk5WYi7QSGJtNGgls8JHMIz9X4PGOFcn2Ji+rMuujwSp5spA++u3dOJ74PCYhjYT/ADcSf5cmEkz+h7Q+sqnhTY21NNAnTg0zlc07MAGObKLKTcsANy34qOAO7hYaUAijSKQSDvGh8RvoZFdRRVbHKcne4O1eEUQimkUGgpgyK8tRCKbahQbG2rynUqFHrBAVa4CJQGZh2QqtJ3qoM7L55cOPtmq2KMsQo3sQo8SbD8am4hM8bANlQtMxYqbZOshRFvu0EaG3PKON6nN0XgrIDRGYrmOmssh3AvJ2j6KV8NedRpMUGk00RVZF4b1I/E3qTj8UETq0UgWBueNzpfiSd/DdyqkZr1km62NUUOVSxsB+QHmd3jU6DERw6r25Pi9xfDiT31XljSjFyB31NOhy4mYnDtI5JeRlXwALaDkLqarsW97EcCUHgNV/H7qlTsXSNB8LOfsmQ/8AlQdnOFZXZcyhwxHMJbMPRj6UXuBEtdgTrD86ZQIwy7z2iCQA1uVyBVt0e6MpjLF3KHqhooBzFbC9zuGUpw491dB2rg1kwcsaWs0JyW3ezdPK4FYnovjeqjim3LHI8bd66yaAb+xJKfsCr9koySfBLW5RdEHbfQyWG5QEqNx9q4+yNDVThdlluyQQ1swDKe0PqAat5Cu66ML6EEeIIP41W4vZCstlAurF0vuBb20P1G1v3tcagVV9MuUTj1Hkzj+GwWVirDKefC/LMLFT3Xq6wmDtuJHG3id4DAjzsT31r5+jCTBZIpGjHw2BtrZlNwbEEEHTgag4jZEkXfbkDYX7+PnSLC4lO0TKv5mOW/U2JF+8new8SPCnphuTeRAHgBlsLetTo0PLy/3r0oPP1qigLqIzQW4D1oDYf+/05VYiKmPFy/vyouKFUimmj51T7QwQbW2vG3GtVNDfx/vfVdLCANdx3G4sT41GcCsZGNeEg6+tdb6SbVWTAYGIMCQiPputDAuGP/uLNWLl2SW8/T/Q1oukmzvm64SJbZRhA17a5pJ5ywJ5DKNOZPOkww/5YoOZ1hlIzx1uTzP4mm2ozLTCK6mmjk6rYMimEUUimkUtDJgyKaRRCKaRQaGTGUqdSoUesbhQc6233vfll7RNzoLAHU6CpWIUErFrkT6V9/aVFVs1jwJbKBwseLNUZFzWVdLkXPPUEX5KLA27rncLTJ2/+XnmvociJ3IoBj82Zix70NQmaoOuCix6lohO2+WRso+qlh6C5HmOVVlXfSo5ZEgG6GJE+0VzufVvuqkrFk2lRpxu4p/nsOC6E8rD1v8ApXsW8eI/GjzgWYjiyH+ZWJqMh1HjSDl/sfD5pAOWHe3mzL+DUGCAKYiwupaPzWVMr/epqy6Jm8rdyG3heP8AO9ScZhuqVGtcRSMjcbCOUTQ+qtbzFVUbVi35Gs6GYohHwkhu8B7J+OFtY2HkbelZ3YWDtBjo/wBzKHHHSMureqIw86vMfs90ZJ4BeSK+UfvoTq0JPMalf97R+iuIiaTaEhYCJ2jILaaSLISD36kW53rTXCZD1aLTozizDFFHIfo2AWKTgrDsmFzw7QOU8fZ3gX0tc12H0ty4dYEgMzkvccDnYsRlAJb2jV9gYdpyb2jwy8FC52A8GJA8NPCqY8iqluTyY97Zpo48rNybteDbj66eh503FYVZB2h4HiPCmYPDOo7czSHmVRfuUCpVWImdxGznQ6DMvPiPEcvWq3FKB/r+tbQ1UbX2ZmGZB2t9ufhwvSyjtsPGW+5nlJvp9+/1q0h2aChklOVAMxP1Rqb91Uysb2137uO/gOfdWzhgDxx5tQArW4EgAqT4Gx8QKSG483Rl9pSGIR5IVaeZiIIpD2Y1UXLvc6yWtflcKN2pcJiZChXE4hkkubho4+otwUrb2O/MD31B6RbP+c4/6WQRwwRobswUFmJbQnw1P1RzrR4N4HUrFMkpA1HWLJe/OxNh/etLHeTC3SRVYjArERIq5UBAkQarGeDKf3Z+7TQagW/yqYMJ8ytqGw8ig/wPGw+6Wooe7BUAyZGiKkezZSQHvvtY2O4hjROkjvLs+MsbjD4zqVJ1ZYpcMJApPGzlVHcF8aDjpyRkvWv5GnLVilH2v+DDMtDZakOtDYV0GjkpgCKYRRiKYRU2iiYMimmnkU0ilHGWpU61KgGyIwO4aXuCeS2Ob9POrPGRDqcHh9AHlQuOZY6r9ksxt/zFqBGtzoLncBzvw/CpMUWdiwa/zUxvv9sXYzSDmMwQA/CorNk+5rhx8ii25iOsxEr/ABOzDwY3H3EVBo+NFpHHJmHoaBWBu3ZsSpUgqv2SP4T6XH/dTI0uQBvJsPE7qbTwCLNqOIPgaATQdBp7YlQfeBX7mP4gVt9p4IC5I+jcBZPqEAhJPIEg+CcATXPZJOpxCTL7LFZV8CQWXyNxXVMdtOGGLrZGAS2nEtcaBRxJrVipxaZHJaaaIWydrJFhSMS4DQHqn5tlAMZXicy5SKwnVPtDEyNEhjiLK0nwqN3WMBoWOrWHf41ElL42fsKEXcAL5Y0BNvS5rd9EjFhRPGLm0qhR7x+ijJJ5C5P5UNWtpPg9p07rkm/J9gFihkAGvXyrmsMzKhCi58jV/JtGMXsc1t+W1hbfdiQo9a5vJ0qWKLqoxnYtI5GohXO7NY2sXtcabtKitHNiI0mxUv0TyLGqBgqqCy3kyLpYC41F92tWhN6airJSgruTOgjpXhc2TrkLbrIc39VgKuka4vWJ6H7CRJWkRBlUkBmFzfgovusLE97EcK3Bq2Nya3JZEk6QqVeUqqTKnamyAx6xPa3nvt+dWkHsgdw/CnXpUNKC26MH8p+wmkVcTGLlFKyAb8l7hvAXa/j3VzfC4l4nWSNirKbgjeDXbOlm1lw2Gd21JBRF+JmBA8t5PcDXOPk/2RHPJI8liIwpCncS1+0fC33isOeC7RaeWa8Mu5ubLY+0GkCO6AO8cgfLuJS/a89PWtC8HWbL2n9TExzDuWFMNn+6OQedQcBCiRmVxYBCTfSy+2/lp91X/QbDdZBJh5Bb5zBJnF72acMzDyzkeVPl1KF+m4IU5V67HMJFoLLRog2UZhZrWYcmGjDyN6awrrbNWcPh0RyKGRR2FDIqbRVMCRTCKMRTCKRoomCtSp9qVLQbIsbG+nLfyvy77X8NKPhIyZXUe/FIBbk8TEL36sD/ALUJRRsPiAksT/Cylu9VIVv6Lfy1ncd7NcZbNIzePN5XP12/6jQlXUX3H+71ebXwY7YC2aNmAPxopKt53Ga/JzyF4O08L1aqDvDOniAVdT5hwa58oNM3KSZEaOw7wSD5b6ssDF1sDJ76fSJ3g6MvqPwqMq517zYH+Iez/MLjxo+AJjs6njoTuViNVf6rDj4cqFBJHUBoQh3C8kLcx/ixX+IanyqvmxEk5jjZswQBE5BRurQ4dI2vGf2UrXS/+HJ7yX4HiPOvR0VmiOZBqDcHQqw+E30B+7vB3Pob4BaLPZkCwQgKLG1ye/iT+lVGBWbFzSQQEqjNeRz7Vsqqb9xynStdBhuuitbIxFjv0PEA6a9xse6h7K6PNhlujMl7hioGYqGJUXI03/hVlBuvQk51fqetsJMEVeGSPQLdZFBZiubtBgDa+YjUW1sdNKfgdlS4h0eQZVSxQZbKFNzZF0s2p1sAL6DjV3s3ARDtWLMTmLMczXsRvPAA2q0WtnKpbIy7J3y/UbhcOsahEFgNw/3rzGYtYlzOdNw5kncAOJp00oRSzGwAuTWcmiOIPXy6RJconO3M8SfQd51USlpVIMY6nuXGExpltlGnFvd8F+Lx3eN6mioeyZC6ZrWBYhRyVTb8QT51KzWe3NSf5SP/ACoxewsuaH0q9pU4pivlJgaZcPh41LSPKSo7lU5ieQ7Q17qN0Q6IthQxkkBZ7ZgvsgLfs5jqb310G6tTIiBg7ZQQCoY2Fg1rgE88o9Kbj8ZHDG0sjBUUXJP4DmTwHGovGtbmyiyPTpRlulm1zJKuzYPblIWVtOxGdWA78tyeQ7zputiy9XNGRoAwHkdPwrmvycwmefE41xqzFVub2LnMw8hkHga6CDSwWuLb8x5PQ0l5GV6Y7N6jG4mO1lMplTvWf6Ukd2dpF+zVA610v5T8DnTDY1R7SdTIbcwXiJPIHrR4uK5xIta+inrwr1W38HO63HozN+T3IrCmEUZhQ2FXaIRYBhTCKMwphFTaKpg7V5TqVKMRQKdlpAU8VKi1g8VZgwb4L+OVcv4Bfv50zpPHeLCtxKsjn68YjjzHxVUNHljDKR3H8KiYpTLEij3mzj+IgKB3EjL/ACjnUM8e61+cmjBO2n7/APhRhmQkbjuI8PzBpTTlt/n39/8AffU7H4YvkkUdqQAMNNXG8j+K1/G45Xr5IWU2YEHvFc9xaN6aZJwOPaPTQqbXDXt43GoI33GotXUtgYjEIoWVLrpZ1OYEHcRkBJPiFGulc0/4LKoDyKVUgm9ibWFwGA3X767DsKPLh8OnKBL+Sp+taenhK9yOaSonIintAa87WPgePlRgKHktup4rckY7EEFOOmppVWYljOxiUkRqbSMOJ/dg/iR91ebo8lYFlOKblAp85SND9n++dl0iYiNIksCzAAcspGXQe7nMQPcTVvHGFAUAAAWAGgAG4AcBVSg63Fk+7CoA/iYHXvFibjmgqUo7e7KRlv7ItcNCERUG5QFHgBao+PmyPEeblD4MjEf1Ko86mVT9JYi+HfLoVZHB/gkVj9wNO9oiLdlxSoOEmzxo/wAShvUA0UUydivY558rhNsNrp9Lpwv9HbT1rK7M6OY3EopRGMfulmCp4gE6+QrpHSrBJNicCkihlMktwdxtHmAPddRV7s/DLEvVoLKpNhyBOaw7hesksOvI2zTHLpgqIPRTY/zTDJESC2rORuLMeHgLDyq3NeO4A1/s8qVa4pJUjPJtu2abBYMY3Z8uFJAOoUn3WBzxP5OB6VxyeMgnMMrAkMp3qykhlPeCCPKus9EMXknyHc4y+Y1X8x51m/lO2J1OJ65R2J9T9WZR2x9pbN4h6h08+x6hwfEvuN1OPtcGpcxMAwobCpMi0FhXVaORFkdhQyKOwobVJosmCtSr21e0o1kQU8U0U4VEsx615BDYZfTwvcW8PypyiiqKfSmJqa4ALGGLre13LrzRiSwt9xHPtcKdiMGsuV2UXBuw1JJHudy317wb0fqQTm48+P8ArR1XW/HjyPjXlhtUwyz76lsZ/aAxOUpI5CZWYKN1l4G28C43k11yIZeqX6hX0C/pWFnwxkyC17yIrfwyMEb/AKh6VvJFu6Hlf77Vn7Ls8jS9jXHN2uNN+5KNeimk17VUIRcfKxtFGbM28/AnFvHgO/wo+FgVFCqLAf2T416iAEnid5523U+hW9hvahs0oVSx3KCT4AXNQtiYcrHdvbcmRvFtbVIxa5gE4Ei/gNT5G1vtUY0Gtwp0j0mmNGCpUjQix869FOBphSLsuPKmQ+6zDyzFl/pK1KpgGvjr6afpT6CVBe5TbZ/9Vgv8yX/+D1aI30jDuU/iPyqlxmJV9oQRDfHFJKe4vljX7i3qKuJHAkv9Rj/KR+tTXLY/kkRUkMuJYe5CAO4yuL/0rb+arM1D2Vh+rjAb22Jd+Pbc5m15C9h3AUPauNZcsUWssl7X3Io9uQ9w0AHEkUy2VsV7ukSlxBDjIbMpBLfDbUeLd3DeeAO82zs5cfgii2BZQ8ZOuWVdRc+N1PME1gsPCEUAep3k8STzNa/oXtDfAx39pP8AuH5+tZurg3HWuUaME0npON4mMgkEEEEgg71YGzKe8EEeVRGFdH+VHYPVyjEoOxMbPyWUDQ92ZR6rzaueSLXT6bOs2NS8/M5HVYOxyUuOURmFDYUdhQmFUkicWCtSp1qVJQ9kEU8UMUQVBGhhFoq0JaKtURGQVaKtCWirVkRkey4l4yjqhcK4ZwvtFQG3DjqQbdwqzXpaj6K6JwOdgpB7w26oCGs10p2cQ3XLuNs3cdwPgfx8aydXjlFdpH6mzossW+zl9Df4WZ5d2MQf5WRyPtNcf0ir/CqQoBcufiOW5/lAHoK5H0EiDYkg8InI8Ra1dKwe01WNAblgoB3b7Vlw5LVs35IVsi5vXgNUOJ6TRR6tYeLCi4LbbSnsYaa3xMFRfHtkEjwBq/aRI6GXPG/9/wB6Cvb0wGvb1QU9r29eUr14B7UfaGNSGNpZDZVFyfyHed1GZgBc6DieXfXJOnHSY4qTq4z9Ch0/5jfGe7l68dI5sqgrKY4a2W3QbHNiMdNO+9uHIG9l8gqjyrfzt9Mner/ilcy+TVrTOe5f+61b7amKyyREWucwFzYalNT3AXJ7gajhfctlcse9SLgm1QsDh+00re29vsovsJ95J72NSImuLHzv3669/G3fQ8biljW7MBoTc7gF1Zj3D8wONaX6kESGa1eQY4xyKVPbBuO4jW3693iL13zo5QbHM2kae9r7zfWtcnkPO8jBYbILk3Y7z99h3X9d5pbvYatO50vFYaPH4RkbdIu8b43GoYd6sAR4CuGbSwbxO8cgs6MUccAw5dxFiDyIrqvQ/aeR+qY9lzp3Pw9d3pTflH6LGdfnMK3lRbOo3yxjXQcXXW3MEjlbJhyfC5tL8LK58XxGLblfn+zjbCgNUuVRvGoO486jOK7b3OGk06YKlXtKlHIAp60MU9azI1MKtFWhLRFqqJMMtGWgrRFqqISDLTyoIIIuCLEHcQaGtEWqrcizI7RwkmEkzRswVrhWBII4lSeenmKkbI2vipH6tSr8bsPZHM2tWnngWRSji6nePzHI1kJI5MDNe2ZSCAeDLpp3EWFcbqumeKWqPh+x2+j6tZlol4vudC2FsuKKzHtybzI2ra78vwjuFaCNwd1cfk2vPiXESsUUncp9bnj4V0rYSsqAMb6UuHIm6SL5IebLoGvb0wU4VrRmCU2vL1g+nXS7Lmw2HbtbpHHu80U8+Z4bt+5MmRQVsaEHJ0iJ0+6VZ74aBuwNJGHvH4Afh58927fhKVKuXObm7ZvhFRVI1XQJrSSa8F07u1cj++NbHaeLvPEAAcrZRfcXuG8wMutuRHDXCdD5yjuRa4W4/iHsjwJ31qNnvnxEVrlYvoweDtcZ37yWB7rEczVscu6oiTW9m2iIRbk6AEsT6lj95rHbQ2i0j9ZlLXYCKM7mKaqSPhUnO3NioubLa56R4wBOrJIBs0hHtZL2Cr9Zm0Hgag7IiCH5zPZbjLFGBmNhqFQbzpc8zcsbbltkk29KJQjSsu9jYFkXNIc0re0eXHKO7d6cAAAfFbRjQhS12JsFUFmJ8BVNnxOL3HqYfqm7MO9xv8E7P1m1FWuztmRwjsLqRYsfaPieW/QWHdVIN+SJyS8yZh5jobFT46j04+FdM2FtETwh/eHZf+IcfPf51zM1cdFdq9TKAx7D2VuQPut5fgTSdVi1wvzQ2GemVFV8ofRPLO0uFW+dTK8KjUke28IG9veKDfqRro3Om1FwQQdQRuIrt3ygyNGcPKhsys1j6H8qzvSDoomOh+fYFQJWu0sFwFkcEiTKdyyhgw5MRrYnNQ6XqXjhFT8L/wBA6rpVlblHxfc5falU/wD4Xif/ALPF/wD6s/8A4Uq6HxOH/JHO+Fzf4szwp60wU4VMowq0VaCtEWqIlIMhoy0BTRVqsSMgy0RTQlNEWqojJBVNNxmESZCjjQ+oPAg869Wig0zSkqZO3F2uTI7LwTYbHRLJ7JawbgwYFQfUjSuqwoAKyG0sJ1qWGjqQ8Z5Ouo8uFX+zNqLIivuuNQd6nip7wbjyrlSwLBOvJ8HcwdT28LfK5LYGnXqMJxa5NZ/H7UfE3jw7FItzzDe3NYf/AD9KdO9luz0morVJ0iB006X5c2Hwx7WokkHuc1Uj3uZ4eO7nFdVwOCjhXLGoUceZ8TvNUXS3YishmjUB11YDTMvE25jfflep9R0OXTrbtry/on0/6lic+zqk/P8Asw9KlSrlHXJuyJcslr2BFieQFmJ9Aa3mDUQiEsCLAMRvILO5yC3K9hXPMG1nW+7ML+F9furfY+KXFPFDAbHq42kf3YgbkEn49bgb/wAariEmMlxnXT2C9YQ2ii9me1tT+7UaC28BuDGtPgdjlu3iDnY71923wkbsv1B2eecjNUrY+x4cLHlQW07TtbM3MsfLwqvxnSQMcsFiN3Wt+z035Pi/i9kaVqjBR3mZ3Jy2iaDQDlTI5lb2Tccxu8juPlWUjxjv+xVsQ99ZGH0K/wANyE37rFra+FaDZ0srD6S1xoey2/8AiNgfIVWOS3sTlCiYaYzUppMov6DmToB61DSW8mTflGvidSfvH8x5VRsRIudrbWM2Hjjf2423/EmXQ+I3elB6KbcbCS5TrGxuV5X9q3ffWoM44+vhzqLidLNyIPlx+69QljjVeReOR3Z1z/4mwn74fyv+lKuU9dSrP8NAt2jObCnihiniuicthVp60NaItURJhFoqmgiiqarElIMtEWhKaIKqmRkgqmiqaCtEWqIlJBVqHLs9sxeKQxltWFsyMeeW4se8Gpa08GhPHDIqkgY8s8T1QdENNmlv20rSD4NFj7rqvteZNWSC26mA04U2PFDGqihM2aeV992EBr2mV7eqGczeM6HRsSY5ClzexXMB3DUG3rWZ2vseXDmzi6n2WHsnu7j3V0l3CgliABqSTYDxJqVH0ebFRZplMeGNiCwtLPY3AiQ6qv8AzCN3sg3uOT1nSYIxtbS8vf6Hb6DrOpnOnvHzfp9Tm/Rno5Ji30usYPae39K82/Dj39VgihwcQVRZdwA1d2P3sx/vSpeFw6RqEjUKqiwA3Af3xryZUW8r5RlB7TWGUcdTuFZceJQXudKeTU/Yq58NLiP2osm8RX07jIfePGw7t1tQzbPw6MDOesk9yMC47ssK77fEfWvX2w85KYdSFGhfcx7tQRH53bW+XjXmC2I2udytzciMkM3e8p7bnzt3cKGz439xt1zsWQxaLq5ym2kZILAfwJc/jUiPEZtysBzItfw40LC4GOMWRAPAa+tPxUuVSRqdAo5sdBfuvv7gaqrXJJtPgG73Yt7qX82tr6DT7TcqBsqEhS7e05zHuBJIH3k25sakdQAgS9xxJ3trdr951v4miE16rYXsqE1Q5F0Kn+wd36eVSiaBiBpfl+HH9fKjJbAi9ykyy86VWmlKpUVs56KeKYKeK0IxMetEWhLRFNUROQQURTQ1NOFUTJNBlNEU0FTRFNVTJNB1ogNAU0VKoiMkGBogouydnzYl+rw8TSsNGy6In8ch7K+G/urd7M+TOwz47E5RxjhORR3NM4zH7IWs2Xr8WLa7fsacX6dmybtUvf8AowDuFF2IUcyQB6mmwYtH0jzSHlEjyn/2wa6lHh9j4U/Q4SORxucpnb/8st29L0WXpqwFkjRBwBubelhWf4/PLwQr5/iNS/SsS8cn9PxmBwPR7HzW6vBTAH3pckK+YkOf+mpw+T7arEX+bxrxKu0r+QbItaOTpfO251HgoqJNtydt8jeVRlm6uX7kvkXh0fSQ/bfzIA6NNhLSSYVpHXUSzMswQjcyRIBEhHMqSOdNlx7Sks7lieJNzT5cS7b3c/ab9aiGBTwHpXowa3lyVk41UVSBbR2iIhZVLufZVRryuSNw76rYtmSzkPin3G6xKSFXxI4+HMjMwq3ECjcLU7JTOF8gUq4HQxKgCqoUAWAAAAHIAbqdemilTpCOx16hl881vdjH9bD8lv8AzGvcdjliRmJBsNBcAsdyrrxJsPOqDZ+PjMPVmQGWVjny3LAMbuSo1U5QfMip5JpbDQg+TRYSbOufgTdf4eB89/nRDTI2FhYEDhoR+IpxNNEDPDTHr0mmmmPEX5ovfSqRSpaQTmtOFKlVEZmPFOFKlTIRhBThSpVREmEWiLSpVRE2EWiP7LeB/ClSppeB/ISHjXzX3O2/JR/9Lw3g3/W1Lp3vi8DSpV8x0/jR9Vl8TMVPWfxHtUqVdaXBhHQ7xV3BupUqMRZDzXgpUqcme0qVKgEVNevaVEBzfpZ/6lPP8DUzoR+3H+U3/UlKlXO/7PqbP2G5NNNKlW6JkY014aVKiE8pUqVKE//Z" alt="Profile" />
          </div>
          <div className="profile-details">
            <h2>John Doe</h2>
            <p className="title">Software Engineer | Full Stack Developer</p>
            <p className="location">San Francisco, CA</p>
          </div>
        </div>
      </div>

      <section className="about">
        <h3>About Me</h3>
        <p>
          Passionate software engineer with a strong background in building scalable web applications.
          Experienced in both front-end and back-end development, with expertise in React, Node.js, and MongoDB.
        </p>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        <div className="experience-item">
          <h4>Senior Software Engineer</h4>
          <p>XYZ Corp | January 2020 - Present</p>
          <p>Lead the development of enterprise-level web applications and APIs using React and Node.js.</p>
        </div>
        <div className="experience-item">
          <h4>Software Engineer</h4>
          <p>ABC Tech | June 2017 - December 2019</p>
          <p>Developed full-stack web applications with a focus on user experience and performance optimization.</p>
        </div>
      </section>

      <section className="education">
        <h3>Education</h3>
        <div className="education-item">
          <h4>Master of Computer Science</h4>
          <p>University of California, Berkeley | Graduated 2017</p>
        </div>
        <div className="education-item">
          <h4>Bachelor of Computer Science</h4>
          <p>University of California, Berkeley | Graduated 2015</p>
        </div>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>JavaScript</li>
          <li>CSS & HTML</li>
        </ul>
      </section>
    </div>
  );
}

function Orders() {
  return (
    <div className="orders">
      <h2>Your Orders</h2>
      <p>Here are your recent orders:</p>
      <ul className="order-list">
        <li><strong>Order #12345</strong> - Status: Delivered - Date: January 5, 2025</li>
        <li><strong>Order #12346</strong> - Status: Shipped - Date: January 8, 2025</li>
        <li><strong>Order #12347</strong> - Status: Pending - Date: January 10, 2025</li>
      </ul>
    </div>
  );
}

function Settings() {
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('******');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </label>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="back-home-link">Go back to Overview</Link>
    </div>
  );
}

export default App;
