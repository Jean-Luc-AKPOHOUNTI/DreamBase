# DrumBase – Architecture des Composants

Ce document détaille les relations et rôles des composants principaux de l’application DrumBase (streaming audio).

## Structure des composants

```
MainLayout
├── Sidebar
├── HeroSection
├── PlaylistList
├── TrackList
└── AudioPlayer
```

## Détail des composants

### 1. MainLayout
- Composant racine qui structure l’application.
- Contient la `Sidebar` et le contenu principal (HeroSection, PlaylistList, TrackList, AudioPlayer).
- Permet d’organiser l’UI en deux zones : navigation (sidebar) et contenu.

### 2. Sidebar
- Barre latérale de navigation.
- Contient les liens essentiels (Accueil, Playlists).
- Présente sur toutes les pages pour une navigation rapide.

### 3. HeroSection
- Section d’accueil ou de présentation.
- Affiche le titre, le slogan, et éventuellement des boutons d’action.
- Peut être affichée sur la page d’accueil ou en haut du contenu principal.

### 4. PlaylistList
- Affiche la liste des playlists disponibles.
- Peut être affichée à côté ou sous la HeroSection selon la page.
- Permet de sélectionner une playlist pour afficher ses morceaux.

### 5. TrackList
- Affiche la liste des morceaux d’une playlist sélectionnée.
- S’actualise selon la playlist choisie.
- Permet de lancer la lecture d’un morceau via l’AudioPlayer.

### 6. AudioPlayer
- Lecteur audio global, toujours visible (en bas ou sur le côté selon le design).
- Contrôle la lecture, le volume, le seek, etc.
- Reçoit les informations du morceau sélectionné via TrackList.

## Relations et flux de données

- `MainLayout` englobe tous les autres composants.
- `Sidebar` permet de naviguer entre les pages (Accueil, Playlists).
- `PlaylistList` et `TrackList` sont liés : la sélection d’une playlist dans `PlaylistList` met à jour les morceaux affichés dans `TrackList`.
- `TrackList` envoie le morceau sélectionné à `AudioPlayer` pour lecture.
- `HeroSection` est principalement décoratif/informatif.

## Exemple de flux utilisateur
1. L’utilisateur navigue via la `Sidebar`.
2. Il voit la `HeroSection` et la `PlaylistList`.
3. Il sélectionne une playlist, ce qui affiche les morceaux dans `TrackList`.
4. Il clique sur un morceau : `AudioPlayer` démarre la lecture.

---

Ce schéma peut évoluer selon les besoins (ajout d’authentification, recherche, favoris, etc.).
