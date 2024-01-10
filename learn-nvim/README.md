# Usage

d => delete line
u => Undo
C + r => Redo

## Scrolling

- C + d => like scroll to bottom in the middle
- C + u => like scroll to top in the middle
  Ctrl-y Moves screen up one line
  Ctrl-e Moves screen down one line
  Ctrl-u Moves cursor & screen up ½ page
  Ctrl-d Moves cursor & screen down ½ page
  Ctrl-b Moves screen up one page, cursor to last line
  Ctrl-f Moves screen down one page, cursor to first line
  Ctrl-y and Ctrl-e only change the cursor position if it would be moved off screen.
  zz => center the page with the pointer if on bottom or top
  zb => bottom
  zt = top

## Clipboard Actions

Press d to cut for selected line/word with V/v;
yy -> copy the cursor line

- J => move to below line to current line

shortcut in the neo-vim
D -> delete the file or folder

## Movement cursor

0 || $^ => move to end of the line
$ => move to first of the line

## NvChad Configs

Ctrl + n => open/close sidebar
{ => jump pointer with 4 line top
} => jump pointer with 4 line bottom

a => pass the right and change to insert mode
o => go to next line end change to insert mode

A => go to end line and change to insert mode
I => go to start line end change to insert mode

## Save and quite

:wq! => save and quite
:x! => ``````
:w => save file
:...sort => sort selected all line by alfabetic

## change cursor location to title or function line

[[=> top]] => bottom

## Delete

dw => delete word
d$ || D => Delete right of the cursor
Ctrl + u => delete all line
Ctrl + w => delete a word

## Window operations

Ctrl+w + s => Creating horizontal window
Ctrl+w + v => Creting vertical window

## Add new nvim config shortcut

### split window

sv => add new window at the same file
ss => create horizontal window

### Move window

sh => focus left window
sk => focus top window
sj => focus bottom window
sl => focus right window

## Create tab

te => create new tab
tab => focus between/next tabs
tab+shift => foucs previous tabs
shift h or shift l => foucs tabs with sidebar

## Command out in

gc => command out/in when selected lines

## Sidebar editor

H => show/hide some hide files/folder

## Open file tree

sf => open file tree

## noise tooltip about cursor pointer token

Shift + K => tooltip info

## search all project with grep

<leader + /> ==> for search all project a word

## Some good tools

rg -> for searching files quickly(ripgrep)
fd -> for searching for folder or files names

## update variable name with increname

<leader c r > => update all files variable names

## Open Terminal

Ctrl / or <leader f t > => open terminal and close terminal is esc x2 => open again <leader f t>

## Go to defination

gr => go to defination

<leader>cl Lsp Info n
gd Goto Definition n
gr References n
gD Goto Declaration n
gI Goto Implementation n
gy Goto T[y]pe Definition n
K Hover n
gK Signature Help n
<c-k> Signature Help i
<leader>ca Code Action n, v
<leader>cA Source Action n
<leader>acr Rename n

## Replace using regex expressions

:s/PATTERN/REPLACEMENT/

## go back and go forward

Ctrl + o -> go back
Ctrl + shift + i -> go forward
