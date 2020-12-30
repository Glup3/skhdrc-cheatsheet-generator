# skhd Generated Shortcut Cheatsheet

## Keycodes

- 0x21 = "["
- 0x1E = "]"

## Toggle window fullscreen zoom / float

| Shortcut | Command |
| -------- | ------- |
| HYPER  + F | `yabai -m window --toggle zoom-fullscreen` |
| HYPER  + D | `yabai -m window --toggle float` |

## Swap window

| Shortcut | Command |
| -------- | ------- |
| HYPER  + 0x21 | `yabai -m window --swap east || yabai -m window --swap west` |
| HYPER  + 0x1E | `yabai -m window --swap north || yabai -m window --swap south` |

## Move current Window to next/prev Monitor

| Shortcut | Command |
| -------- | ------- |
| HYPER  + O | `/Users/phuc/.config/skhd/scripts/moveWindowLeftAndFollowFocus.sh` |
| HYPER  + P | `/Users/phuc/.config/skhd/scripts/moveWindowRightAndFollowFocus.sh` |

## Move current Window to next/prev Space

| Shortcut | Command |
| -------- | ------- |
| HYPER  + U | `/Users/phuc/.config/skhd/scripts/moveWindowPrevSpace.sh` |
| HYPER  + I | `/Users/phuc/.config/skhd/scripts/moveWindowNextSpace.sh` |

## Center Window

| Shortcut | Command |
| -------- | ------- |
| HYPER  + C | `yabai -m window --grid 7` |

## rotate tree 90

| Shortcut | Command |
| -------- | ------- |
| HYPER  + R | `yabai -m space --rotate 90` |

## activate stack layout

| Shortcut | Command |
| -------- | ------- |
| HYPER  + S | `yabai -m space --layout stack` |

## activate bsp layout

| Shortcut | Command |
| -------- | ------- |
| HYPER  + A | `yabai -m space --layout bsp` |

## create new space for current display

| Shortcut | Command |
| -------- | ------- |
| HYPER  + N | `yabai -m space --create` |

## destroy current space

| Shortcut | Command |
| -------- | ------- |
| HYPER  + M | `yabai -m space --destroy` |

## focus space

| Shortcut | Command |
| -------- | ------- |
| HYPER  + 1 | `yabai -m space --focus 1` |
| HYPER  + 2 | `yabai -m space --focus 2` |
| HYPER  + 3 | `yabai -m space --focus 3` |
| HYPER  + 4 | `yabai -m space --focus 4` |
| HYPER  + 5 | `yabai -m space --focus 5` |
| HYPER  + 6 | `yabai -m space --focus 6` |
| HYPER  + 7 | `yabai -m space --focus 7` |
| HYPER  + 8 | `yabai -m space --focus 8` |
| HYPER  + 9 | `yabai -m space --focus 9` |

## Quickly restart the yabai launch agent

| Shortcut | Command |
| -------- | ------- |
| CTRL + ALT + CMD  + R | `launchctl kickstart -k "gui/${UID}/homebrew.mxcl.yabai"` |
